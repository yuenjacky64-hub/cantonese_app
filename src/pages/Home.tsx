import React, { useState } from 'react';
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
  timeOutline,
  appsOutline,
  createOutline,
  homeOutline,
  peopleOutline,
  chatbubblesOutline,
  bookmarkOutline,
  informationCircleOutline,
  gameControllerOutline,
  gridOutline,
  pencilOutline,
  shuffleOutline,
  happyOutline,
  cloudDownloadOutline,
  flameOutline,
  earOutline,
  newspaperOutline,
  bulbOutline,
  airplaneOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import { lessons } from '../data/lessons';
import { getSRSStats } from '../utils/srs';
import { getStreakInfo } from '../utils/streak';
import CommonHeader from '../components/CommonHeader';
import { textOutline } from 'ionicons/icons';
import './Home.css';

// Define group order if not searching
const groupOrder = ['groups.basics', 'groups.daily_life', 'groups.social', 'groups.grammar', 'groups.travel'];

// Icon map for groups
const groupIcons: Record<string, string> = {
  'groups.basics': appsOutline,
  'groups.daily_life': homeOutline,
  'groups.social': peopleOutline,
  'groups.grammar': createOutline,
  'groups.travel': airplaneOutline
};

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
  const { t } = useTranslation();
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

  // Effect to set daily tip
  React.useEffect(() => {
    // There are 8 tips
    const randomTipIndex = Math.floor(Math.random() * 8) + 1;
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
        {/* Ambient Immersive Header */}
        {!selectedGroup && !searchText && (
          <div className="ambient-header fade-in-up">
            <h1>{t('home.welcome')}</h1>
            <p>{t('home.subtitle')}</p>
            {dailyTip && (
              <div className="daily-tip">
                <div className="daily-tip-icon">
                  <IonIcon icon={bulbOutline} />
                </div>
                <div className="daily-tip-content">
                  <strong>{t('home.tipsEveryday')}:</strong>
                  <p>{t(dailyTip)}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={`pod-dashboard ${(selectedGroup || searchText) ? 'no-ambient-header' : ''}`}>
          {/* Primary Actions Grid - Review, Bookmarks, Intro */}
          {!selectedGroup && !searchText && (
            <div className="primary-grid fade-in-up">
              {/* Review Pod */}
              <div className="learning-pod pod-hero" onClick={() => history.push('/review')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('home.reviewDue')}</div>
                    <h2 className="pod-value">{t('home.dueCount', { count: dueCount })}</h2>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>

              {/* Bookmarks Pod */}
              <div className="learning-pod pod-bookmarks" onClick={() => history.push('/lesson/bookmarks')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('bookmarks.title')}</div>
                    <h2 className="pod-value">{t('bookmarks.pinnedSubtitle')}</h2>
                  </div>
                  <IonIcon icon={bookmarkOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>

              {/* Intro Pod */}
              <div className="learning-pod pod-intro" style={{ background: 'linear-gradient(135deg, #845ec2 0%, #d65db1 100%)' }} onClick={() => history.push('/intro')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('home.introToCantonese')}</div>
                    <h2 className="pod-value">{t('home.introSubtitle')}</h2>
                  </div>
                  <IonIcon icon={informationCircleOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>

              {/* Daily Streak Pod */}
              <div className="learning-pod pod-streak" style={{ background: streakInfo.streak > 0 ? 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)' : 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('home.dailyStreak')}</div>
                    <h2 className="pod-value">
                      {streakInfo.streak} {streakInfo.streak === 1 ? t('home.day') : t('home.days')} {streakInfo.isActiveToday && '✓'}
                    </h2>
                  </div>
                  <IonIcon icon={flameOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>
            </div>
          )}


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
                  <IonIcon icon={chevronForwardOutline} style={{ color: '#cbd5e1' }} />
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
                  <IonIcon icon={chevronForwardOutline} style={{ color: '#cbd5e1' }} />
                </div>
              ))
            ) : (
              /* Root Categories View */
              sortedGroupKeys.map((groupKey, idx) => (
                <div key={groupKey} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05 + 0.2}s` }} onClick={() => setSelectedGroup(groupKey)}>
                  <div className="pod-icon-box" style={{ background: 'var(--glow-indigo-soft)', color: 'var(--glow-indigo)' }}>
                    <IonIcon icon={groupIcons[groupKey] || appsOutline} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>{t(groupKey)}</h3>
                    <span>{t('home.lessonsCount', { count: groupedLessons[groupKey].length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: '#cbd5e1' }} />
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

          {/* Games Category Section - Moved to bottom */}
          {!selectedGroup && !searchText && (
            <div className="category-section fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="category-title">{t('home.gamesCategory')}</h3>
              <div className="games-grid">
                {/* Salita Challenge */}
                <div className="learning-pod pod-game" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }} onClick={() => history.push('/game')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('game.podTitle')}</div>
                      <h2 className="pod-value">{t('game.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={gameControllerOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Memory Match */}
                <div className="learning-pod pod-memory" style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)' }} onClick={() => history.push('/memory')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('memory.podTitle')}</div>
                      <h2 className="pod-value">{t('memory.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={gridOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Spell Challenge */}
                <div className="learning-pod pod-spell" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }} onClick={() => history.push('/spell')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('spell.podTitle')}</div>
                      <h2 className="pod-value">{t('spell.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={pencilOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Word Scramble */}
                <div className="learning-pod pod-scramble" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }} onClick={() => history.push('/scramble')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('scramble.podTitle')}</div>
                      <h2 className="pod-value">{t('scramble.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={shuffleOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Emoji Hulaan */}
                <div className="learning-pod pod-emoji" style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' }} onClick={() => history.push('/emoji')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('emoji.podTitle')}</div>
                      <h2 className="pod-value">{t('emoji.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={happyOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Falling Words */}
                <div className="learning-pod pod-falling" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }} onClick={() => history.push('/falling')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('falling.podTitle')}</div>
                      <h2 className="pod-value">{t('falling.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={cloudDownloadOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Listening Quiz */}
                <div className="learning-pod pod-listening" style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }} onClick={() => history.push('/listening')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('listening.podTitle')}</div>
                      <h2 className="pod-value">{t('listening.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={earOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Sentence Builder */}
                <div className="learning-pod pod-sentence" style={{ background: 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)' }} onClick={() => history.push('/sentence')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('sentence.podTitle')}</div>
                      <h2 className="pod-value">{t('sentence.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={textOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* True or False */}
                <div className="learning-pod pod-truefalse" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' }} onClick={() => history.push('/truefalse')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('truefalse.podTitle')}</div>
                      <h2 className="pod-value">{t('truefalse.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={bulbOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Section */}
          {!selectedGroup && !searchText && (
            <div className="category-section fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="category-title">{t('news.hongKongNews')}</h3>

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
