/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import { getNowPlaying as nowPlayingSelector } from '@/selectors/MovieSelectors';
import { getNowPlaying, getAPIConfiguration } from '@/actions/MoviesActions';
import MoviesList from '@/components/MoviesList';
import PrincipalMovie from '@/components/PrincipalMovie';

const list = [
  {
    adult: false,
    backdrop_path: '/iopYFB1b6Bh7FWZh3onQhph1sih.jpg',
    genre_ids: [28, 878],
    id: 399566,
    original_language: 'en',
    original_title: 'Godzilla vs. Kong',
    overview:
      'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
    popularity: 11701.435,
    poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    release_date: '2021-03-24',
    title: 'Godzilla vs. Kong',
    video: false,
    vote_average: 8.7,
    vote_count: 1236,
  },
  {
    adult: false,
    backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
    genre_ids: [28, 12, 14, 878],
    id: 791373,
    original_language: 'en',
    original_title: "Zack Snyder's Justice League",
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    popularity: 7337.834,
    poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    release_date: '2021-03-18',
    title: "Zack Snyder's Justice League",
    video: false,
    vote_average: 8.6,
    vote_count: 4179,
  },
  {
    adult: false,
    backdrop_path: '/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
    genre_ids: [18, 14, 878],
    id: 581389,
    original_language: 'ko',
    original_title: '승리호',
    overview:
      "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
    popularity: 2844.896,
    poster_path: '/1e1tUWInXCVrrwY6ntuNRuwEj7P.jpg',
    release_date: '2021-02-05',
    title: 'Space Sweepers',
    video: false,
    vote_average: 7.2,
    vote_count: 452,
  },
  {
    adult: false,
    backdrop_path: '/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
    genre_ids: [16, 12, 14, 10751, 28],
    id: 527774,
    original_language: 'en',
    original_title: 'Raya and the Last Dragon',
    overview:
      'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
    popularity: 2582.87,
    poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    release_date: '2021-03-03',
    title: 'Raya and the Last Dragon',
    video: false,
    vote_average: 8.3,
    vote_count: 1865,
  },
  {
    adult: false,
    backdrop_path: '/gzJnMEMkHowkUndn9gCr8ghQPzN.jpg',
    genre_ids: [53, 28, 18],
    id: 793723,
    original_language: 'fr',
    original_title: 'Sentinelle',
    overview:
      'Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.',
    popularity: 1823.28,
    poster_path: '/fFRq98cW9lTo6di2o4lK1qUAWaN.jpg',
    release_date: '2021-03-05',
    title: 'Sentinelle',
    video: false,
    vote_average: 6,
    vote_count: 300,
  },
  {
    adult: false,
    backdrop_path: '/z8TvnEVRenMSTemxYZwLGqFofgF.jpg',
    genre_ids: [14, 28, 12],
    id: 458576,
    original_language: 'en',
    original_title: 'Monster Hunter',
    overview:
      'A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.',
    popularity: 1720.013,
    poster_path: '/1UCOF11QCw8kcqvce8LKOO6pimh.jpg',
    release_date: '2020-12-03',
    title: 'Monster Hunter',
    video: false,
    vote_average: 7.1,
    vote_count: 1307,
  },
  {
    adult: false,
    backdrop_path: '/egg7KFi18TSQc1s24RMmR9i2zO6.jpg',
    genre_ids: [14, 28, 12],
    id: 464052,
    original_language: 'en',
    original_title: 'Wonder Woman 1984',
    overview:
      'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.',
    popularity: 1689.501,
    poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    release_date: '2020-12-16',
    title: 'Wonder Woman 1984',
    video: false,
    vote_average: 6.8,
    vote_count: 4568,
  },
  {
    adult: false,
    backdrop_path: '/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg',
    genre_ids: [28, 35, 10751],
    id: 587807,
    original_language: 'en',
    original_title: 'Tom & Jerry',
    overview:
      'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.',
    popularity: 1625.778,
    poster_path: '/6KErczPBROQty7QoIsaa6wJYXZi.jpg',
    release_date: '2021-02-11',
    title: 'Tom & Jerry',
    video: false,
    vote_average: 7.4,
    vote_count: 1041,
  },
  {
    adult: false,
    backdrop_path: '/uQtqiAu2bBlokqjlURVLEha6zoi.jpg',
    genre_ids: [80, 18],
    id: 544401,
    original_language: 'en',
    original_title: 'Cherry',
    overview:
      'Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.',
    popularity: 1424.756,
    poster_path: '/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg',
    release_date: '2021-02-26',
    title: 'Cherry',
    video: false,
    vote_average: 7.6,
    vote_count: 410,
  },
  {
    adult: false,
    backdrop_path: '/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg',
    genre_ids: [28, 80, 53],
    id: 587996,
    original_language: 'es',
    original_title: 'Bajocero',
    overview:
      'When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.',
    popularity: 1418.339,
    poster_path: '/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg',
    release_date: '2021-01-29',
    title: 'Below Zero',
    video: false,
    vote_average: 6.5,
    vote_count: 489,
  },
  {
    adult: false,
    backdrop_path: '/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg',
    genre_ids: [53, 28, 878],
    id: 775996,
    original_language: 'en',
    original_title: 'Outside the Wire',
    overview:
      'In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.',
    popularity: 1113.513,
    poster_path: '/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg',
    release_date: '2021-01-15',
    title: 'Outside the Wire',
    video: false,
    vote_average: 6.5,
    vote_count: 921,
  },
  {
    adult: false,
    backdrop_path: '/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg',
    genre_ids: [18, 53],
    id: 649087,
    original_language: 'sv',
    original_title: 'Red Dot',
    overview:
      'On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.',
    popularity: 971.274,
    poster_path: '/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg',
    release_date: '2021-02-11',
    title: 'Red Dot',
    video: false,
    vote_average: 6,
    vote_count: 401,
  },
  {
    adult: false,
    backdrop_path: '/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg',
    genre_ids: [27, 53, 12, 9648],
    id: 522444,
    original_language: 'en',
    original_title: 'Black Water: Abyss',
    overview:
      'An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.',
    popularity: 942.429,
    poster_path: '/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg',
    release_date: '2020-07-09',
    title: 'Black Water: Abyss',
    video: false,
    vote_average: 5,
    vote_count: 174,
  },
  {
    adult: false,
    backdrop_path: '/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
    genre_ids: [53, 80],
    id: 602269,
    original_language: 'en',
    original_title: 'The Little Things',
    overview:
      "Deputy Sheriff Joe Deke Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
    popularity: 909.772,
    poster_path: '/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg',
    release_date: '2021-01-28',
    title: 'The Little Things',
    video: false,
    vote_average: 6.4,
    vote_count: 677,
  },
  {
    adult: false,
    backdrop_path: '/aMFl4wOPhJ7NVua6SgU9zIJvFSx.jpg',
    genre_ids: [16, 10751],
    id: 755812,
    original_language: 'fr',
    original_title: 'Miraculous World: New York, United HeroeZ',
    overview:
      'During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.',
    popularity: 848.759,
    poster_path: '/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg',
    release_date: '2020-09-26',
    title: 'Miraculous World: New York, United HeroeZ',
    video: false,
    vote_average: 8.3,
    vote_count: 563,
  },
];
export function Home() {
  const dispatch = useDispatch();
  const nowPlaying = useSelector(nowPlayingSelector);

  console.group('nowPlaying');
  console.log(nowPlaying);
  console.groupEnd();

  useEffect(() => {
    dispatch(getAPIConfiguration());
    dispatch(getNowPlaying());
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <PrincipalMovie movie={nowPlaying} />
      <MoviesList title="My List" movies={list} />
      <MoviesList title="Trending Now" movies={list} />
    </ScrollView>
  );
}
