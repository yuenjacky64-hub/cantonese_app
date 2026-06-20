import React, { useState, useMemo } from 'react';
import {
  IonContent,
  IonPage,
  IonIcon,
  IonSearchbar,
  IonButton
} from '@ionic/react';
import {
  bookOutline,
  chevronForwardOutline,
  arrowBackOutline,
  appsOutline,
  createOutline,
  homeOutline,
  peopleOutline,
  gameControllerOutline,
  gridOutline,
  pencilOutline,
  shuffleOutline,
  happyOutline,
  cloudDownloadOutline,
  earOutline,
  bulbOutline,
  airplaneOutline,
  arrowForwardOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Jyutping from '../components/Jyutping';
import { lessons, allCards } from '../data/lessons';
import { getSRSStats, getDueCards } from '../utils/srs';
import { getStreakInfo } from '../utils/streak';
import CommonHeader from '../components/CommonHeader';
import { textOutline } from 'ionicons/icons';
import './Home.css';

// Define group order if not searching
const groupOrder = ['groups.basics', 'groups.daily_life', 'groups.social', 'groups.grammar', 'groups.travel'];

// Keep in sync with the `tips.tipN` keys in src/i18n/locales/*.json.
const DAILY_TIP_COUNT = 8;

// Icon map for groups
const groupIcons: Record<string, string> = {
  'groups.basics': appsOutline,
  'groups.daily_life': homeOutline,
  'groups.social': peopleOutline,
  'groups.grammar': createOutline,
  'groups.travel': airplaneOutline
};

// Game list — single source of truth. Each game uses the same item-pod
// template as categories. No per-game gradient: the games are siblings,
// not nine separate brand statements.
const GAMES: { route: string; icon: string; titleKey: string; subtitleKey: string }[] = [
  { route: '/game',       icon: gameControllerOutline, titleKey: 'game.podTitle',       subtitleKey: 'game.podSubtitle' },
  { route: '/memory',     icon: gridOutline,           titleKey: 'memory.podTitle',     subtitleKey: 'memory.podSubtitle' },
  { route: '/spell',      icon: pencilOutline,         titleKey: 'spell.podTitle',      subtitleKey: 'spell.podSubtitle' },
  { route: '/scramble',   icon: shuffleOutline,        titleKey: 'scramble.podTitle',   subtitleKey: 'scramble.podSubtitle' },
  { route: '/emoji',      icon: happyOutline,          titleKey: 'emoji.podTitle',      subtitleKey: 'emoji.podSubtitle' },
  { route: '/falling',    icon: cloudDownloadOutline,  titleKey: 'falling.podTitle',    subtitleKey: 'falling.podSubtitle' },
  { route: '/listening',  icon: earOutline,            titleKey: 'listening.podTitle',  subtitleKey: 'listening.podSubtitle' },
  { route: '/sentence',   icon: textOutline,           titleKey: 'sentence.podTitle',   subtitleKey: 'sentence.podSubtitle' },
  { route: '/truefalse',  icon: bulbOutline,           titleKey: 'truefalse.podTitle',  subtitleKey: 'truefalse.podSubtitle' },
];

// Song states
const songs = [
  { title: '海闊天空 (Boundless Oceans, Vast Skies) - Beyond', videoId: 'qu_FSptjRic' },
  { title: '跳舞街 (Dancing Street) - Priscilla Chan', videoId: 'yRUAG688jd0' },
  { title: '傻女 (Silly Girl) - Priscilla Chan', videoId: 'v-GguTC9pZo' },
  { title: '海闊天空 (Lyric Video) - Beyond', videoId: 'uM7AREmjmak' },
  { title: 'Top 10 Cantopop Classics Compilation', videoId: 'L4M1VP3b5NM' },
  { title: '1h Classic Cantonese Love Songs Compilation', videoId: 'osgR6gqFZUY' }
];

interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
}

/**
 * Home Page Component
 * Displays the list of lesson categories and the current status of reviews.
 * Allows users to search for specific lessons or words.
 */
const Home: React.FC = () => {
  // i18n hook for translation
  const { t, i18n } = useTranslation();
  const history = useHistory();

  // State for search input text
  const [searchText, setSearchText] = useState('');

  // State for the number of cards due for review
  const [dueCount, setDueCount] = useState(0);

  // State for daily streak
  const [streakInfo, setStreakInfo] = useState({ streak: 0, isActiveToday: false, longestStreak: 0, totalDays: 0 });

  // State for the currently selected group (for drill-down)
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  // Daily tip state
  const [dailyTip, setDailyTip] = useState<string>('');

  // News states
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(false);

  // State for active YouTube videos
  const [activeVideos, setActiveVideos] = useState<Record<string, boolean>>({});

  const handlePlayVideo = (videoId: string) => {
    setActiveVideos(prev => ({ ...prev, [videoId]: true }));
  };


  // Effect to load SRS stats and streak when the component mounts
  React.useEffect(() => {
    const stats = getSRSStats();
    setDueCount(stats.dueCount);
    setStreakInfo(getStreakInfo());
  }, []);

  // Pick one card to display in the hero — the first due card if any,
  // otherwise a deterministic-per-day random card so the hero stays
  // stable across renders within a day.
  const heroCard = useMemo(() => {
    const due = getDueCards();
    if (due.length > 0) return due[0];
    const seed = new Date().toISOString().slice(0, 10);
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
    const idx = Math.abs(h) % allCards.length;
    return allCards[idx];
  }, []);

  const heroChinese = i18n.language === 'zh-CN'
    ? (heroCard.zhCN || heroCard.zhTW || heroCard.cantonese)
    : (heroCard.zhTW || heroCard.zhCN || heroCard.cantonese);

  // Effect to set daily tip
  React.useEffect(() => {
    const randomTipIndex = Math.floor(Math.random() * DAILY_TIP_COUNT) + 1;
    setDailyTip(`tips.tip${randomTipIndex}`);
  }, []);

  // Effect to fetch news
  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setNewsLoading(true);
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://hongkongfp.com/feed/');
        const data = await response.json();
        if (data.status === 'ok') {
          setNewsItems(data.items.slice(0, 5)); // Get top 5 news items
        } else {
          setNewsError(true);
        }
      } catch (error) {
        console.error('Failed to fetch news:', error);
        setNewsError(true);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchNews();
  }, []);

  /**
   * Filters the lessons based on the search text.
   * Matches against category title or any content (Cantonese/English/Chinese) within the cards.
   */
  const filteredLessons = React.useMemo(() => {
    if (!searchText) return lessons;

    const searchLower = searchText.toLowerCase();

    // Dynamically filter lessons without requiring upfront computation for all cards
    return lessons.filter(category => {
      const title = t(category.titleKey).toLowerCase();

      // Check if title matches
      if (title.includes(searchLower)) return true;

      // Check if any card content matches
      return category.cards.some(card =>
        card.cantonese.toLowerCase().includes(searchLower) ||
        card.english.toLowerCase().includes(searchLower) ||
        (card.zhTW && card.zhTW.includes(searchText)) ||
        (card.zhCN && card.zhCN.includes(searchText))
      );
    });
  }, [searchText, t]);

  // Group lessons by groupKey
  const groupedLessons = React.useMemo(() => {
    return filteredLessons.reduce((acc, category) => {
      const groupKey = category.groupKey || 'groups.basics';
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(category);
      return acc;
    }, {} as Record<string, typeof lessons>);
  }, [filteredLessons]);

  const sortedGroupKeys = React.useMemo(() => {
    return Object.keys(groupedLessons).sort((a, b) => {
      const indexA = groupOrder.indexOf(a);
      const indexB = groupOrder.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
  }, [groupedLessons]);

  return (
    <IonPage>
      {/* Header Component */}
      <CommonHeader title={t('common.appTitle')} />

      <IonContent fullscreen className="home-container">
        {/* INK HERO — the page's thesis: the actual next card to review,
            typeset as the app's display language. */}
        {!selectedGroup && !searchText && (
          <>
            <section className="home-hero fade-in-up" aria-label="Review queue">
              <p className="home-hero__eyebrow">{t('home.reviewDue')}</p>

              <div className="home-hero__queue">
                <h1 className="home-hero__queue-count">
                  <em>{dueCount}</em>
                </h1>
                <p className="home-hero__queue-label">
                  {dueCount === 1
                    ? t('home.dueCount', { count: dueCount })
                    : t('home.dueCount', { count: dueCount })}
                </p>
              </div>

              <div className="home-hero__divider">tonight you're learning</div>

              <div className="home-hero__sample">
                <p className="home-hero__sample-chinese">{heroChinese}</p>
                <div className="home-hero__sample-jyutping">
                  <Jyutping text={heroCard.cantonese} size="lg" />
                </div>
                <p className="home-hero__sample-english">{heroCard.english}</p>
              </div>

              <IonButton
                className="home-hero__cta"
                onClick={() => history.push('/review')}
                expand="block"
              >
                {dueCount > 0 ? t('review.title') : t('home.reviewDue')}
                <IonIcon icon={arrowForwardOutline} slot="end" />
              </IonButton>
            </section>

            {dailyTip && (
              <div className="daily-tip fade-in-up">
                <div className="daily-tip-icon">
                  <IonIcon icon={bulbOutline} />
                </div>
                <div className="daily-tip-content">
                  <strong>{t('home.tipsEveryday')}</strong>
                  <p>{t(dailyTip)}</p>
                </div>
              </div>
            )}

            {/* Utility chip row — quiet rest-of-app navigation */}
            <div className="utility-row fade-in-up">
              <button
                type="button"
                className="utility-chip"
                onClick={() => history.push('/lesson/bookmarks')}
              >
                <span className="utility-chip__label">{t('bookmarks.title')}</span>
                <span className="utility-chip__value">{t('bookmarks.pinnedSubtitle')}</span>
              </button>
              <button
                type="button"
                className="utility-chip"
                onClick={() => history.push('/intro')}
              >
                <span className="utility-chip__label">{t('home.introToCantonese')}</span>
                <span className="utility-chip__value">{t('home.introSubtitle')}</span>
              </button>
              <div className={`utility-chip utility-chip--streak ${streakInfo.isActiveToday ? 'is-active' : ''}`}>
                <span className="utility-chip__label">{t('home.dailyStreak')}</span>
                <span className="utility-chip__value">
                  {streakInfo.streak} {streakInfo.streak === 1 ? t('home.day') : t('home.days')}
                </span>
              </div>
            </div>
          </>
        )}

        <div className={`pod-dashboard ${(selectedGroup || searchText) ? 'no-ambient-header' : ''}`}>{/* unchanged rest below */}


          {/* Search Pod - Luminous Interaction */}
          <div className="learning-pod search-pod fade-in-up" style={{ animationDelay: '0.15s' }}>
            <IonSearchbar
              value={searchText}
              onIonInput={e => setSearchText(e.detail.value!)}
              placeholder={t('home.searchPlaceholder')}
              className="luminous-search"
              onIonClear={() => setSearchText('')}
            />
          </div>

          {/* Drill-down / Breadcrumb Navigation */}
          {(selectedGroup || searchText) && (
            <div className="fade-in-up" style={{ padding: '0 4px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              {selectedGroup && !searchText && (
                <IonButton
                  fill="clear"
                  onClick={() => setSelectedGroup(null)}
                  style={{ '--color': '#64748b', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}
                >
                  <IonIcon icon={arrowBackOutline} slot="start" />
                  {t('common.backToCategories')}
                </IonButton>
              )}
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ion-text-color)', letterSpacing: '-0.02em' }}>
                {searchText ? t('home.searchFindings') : t(selectedGroup!)}
              </span>
            </div>
          )}

          {/* Dynamic Content Pod Grid */}
          <div className="pod-grid">
            {searchText ? (
              /* Search Results */
              filteredLessons.map((category, idx) => (
                <div key={category.id} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }} onClick={() => history.push(`/lesson/${category.id}`)}>
                  <div className="pod-icon-box"><IonIcon icon={bookOutline} /></div>
                  <div style={{ flex: 1 }}>
                    <h3>{t(category.titleKey)}</h3>
                    <span>{t('home.cardsCount', { count: category.cards.length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: 'var(--graphite-soft)' }} />
                </div>
              ))
            ) : selectedGroup ? (
              /* Lessons in Selected Category */
              groupedLessons[selectedGroup]?.map((category, idx) => (
                <div key={category.id} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }} onClick={() => history.push(`/lesson/${category.id}`)}>
                  <div className="pod-icon-box"><IonIcon icon={bookOutline} /></div>
                  <div style={{ flex: 1 }}>
                    <h3>{t(category.titleKey)}</h3>
                    <span>{t('home.cardsCount', { count: category.cards.length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: 'var(--graphite-soft)' }} />
                </div>
              ))
            ) : (
              /* Root Categories View */
              sortedGroupKeys.map((groupKey, idx) => (
                <div key={groupKey} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05 + 0.2}s` }} onClick={() => setSelectedGroup(groupKey)}>
                  <div className="pod-icon-box">
                    <IonIcon icon={groupIcons[groupKey] || appsOutline} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3>{t(groupKey)}</h3>
                    <span>{t('home.lessonsCount', { count: groupedLessons[groupKey].length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: 'var(--graphite-soft)' }} />
                </div>
              ))
            )}
          </div>

          {/* Empty Discovery State */}
          {searchText && filteredLessons.length === 0 && (
            <div className="fade-in-up" style={{ textAlign: 'center', padding: '60px 0', opacity: 0.6 }}>
              <IonIcon icon={bookOutline} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p style={{ fontWeight: 600 }}>{t('home.noResults')}</p>
            </div>
          )}

          {/* Games — flat list, same item-pod template as categories. */}
          {!selectedGroup && !searchText && (
            <div className="category-section fade-in-up">
              <h3 className="category-title">{t('home.gamesCategory')}</h3>
              <div className="pod-grid games-grid">
                {GAMES.map((game, idx) => (
                  <div
                    key={game.route}
                    className="item-pod"
                    style={{ animationDelay: `${idx * 0.04}s` }}
                    onClick={() => history.push(game.route)}
                  >
                    <div className="pod-icon-box">
                      <IonIcon icon={game.icon} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3>{t(game.titleKey)}</h3>
                      <span>{t(game.subtitleKey)}</span>
                    </div>
                    <IonIcon icon={chevronForwardOutline} style={{ color: 'var(--graphite-soft)' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Section */}
          {!selectedGroup && !searchText && (
            <div className="category-section fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="category-title">{t('news.hongKongNews')}</h3>
              <p className="category-subtitle">{t('news.attribution')}</p>

              {newsLoading ? (
                <div className="news-loading">{t('news.loading')}</div>
              ) : newsError ? (
                <div className="news-error">{t('news.error')}</div>
              ) : (
                <div className="news-grid">
                  {newsItems.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="news-item">
                      {item.thumbnail && (
                        <div className="news-thumbnail">
                          <img
                            src={`https://wsrv.nl/?url=${encodeURIComponent(item.thumbnail)}&w=200&output=webp`}
                            alt={`${item.title} thumbnail`}
                            loading="lazy"
                            width="100"
                            height="100"
                            className="news-thumbnail-img"
                          />
                        </div>
                      )}
                      <div className="news-content">
                        <h4 className="news-title">{item.title}</h4>
                        <span className="news-date">
                          {new Date(item.pubDate).toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Songs Section */}
          {!selectedGroup && !searchText && (
            <div className="category-section fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="category-title">{t('songs.title')}</h3>
              <p className="category-subtitle">{t('songs.attribution')}</p>
              <div className="songs-grid">
                {songs.map((song, index) => (
                  <div key={index} className="song-item">
                    {activeVideos[song.videoId] ? (
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube-nocookie.com/embed/${song.videoId}?autoplay=1`}
                        title={song.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="song-iframe"
                        loading="lazy"
                      ></iframe>
                    ) : (
                      <div
                        className="song-thumbnail-container"
                        onClick={() => handlePlayVideo(song.videoId)}
                        style={{
                          width: '100%',
                          height: '200px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          backgroundColor: '#000'
                        }}
                      >
                        <img
                          src={`https://i.ytimg.com/vi_webp/${song.videoId}/hqdefault.webp`}
                          alt={`${song.title} thumbnail`}
                          loading="lazy"
                          width="320"
                          height="180"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        <div style={{
                          width: '60px',
                          height: '40px',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1
                        }}>
                          <div style={{
                            width: 0,
                            height: 0,
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                            borderLeft: '15px solid white',
                            marginLeft: '4px'
                          }}></div>
                        </div>
                      </div>
                    )}
                    <div className="song-content">
                      <h4 className="song-title">{song.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
