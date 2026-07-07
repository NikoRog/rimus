export const crossRelationships = [
  {
    "id": "entertainment.cross_relationship.001",
    "subject": "entertainment",
    "relationshipType": "composer_for_film",
    "fromEntityId": "movies.franchise.star-wars",
    "toEntityId": "music.composer.john-williams",
    "objectText": null,
    "templateIds": [
      "entertainment.template.003"
    ],
    "finalWordIds": [
      "music.final_word.williams"
    ],
    "difficulty": 2,
    "importance": 10,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.002",
    "subject": "entertainment",
    "relationshipType": "composer_for_film",
    "fromEntityId": "movies.film.jurassic-park",
    "toEntityId": "music.composer.john-williams",
    "objectText": null,
    "templateIds": [
      "entertainment.template.003"
    ],
    "finalWordIds": [
      "music.final_word.williams"
    ],
    "difficulty": 2,
    "importance": 9,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.003",
    "subject": "entertainment",
    "relationshipType": "virtual_music_event",
    "fromEntityId": "gaming.game.fortnite",
    "toEntityId": "music.artist.travis-scott",
    "objectText": null,
    "templateIds": [
      "entertainment.template.003"
    ],
    "finalWordIds": [
      "music.final_word.travis"
    ],
    "difficulty": 2,
    "importance": 8,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.004",
    "subject": "entertainment",
    "relationshipType": "game_film_character_overlap",
    "fromEntityId": "gaming.character.lara-croft",
    "toEntityId": null,
    "objectText": "action-adventure cinema",
    "templateIds": [
      "entertainment.template.001"
    ],
    "finalWordIds": [
      "gaming.final_word.croft"
    ],
    "difficulty": 2,
    "importance": 8,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.005",
    "subject": "entertainment",
    "relationshipType": "film_game_aesthetic_overlap",
    "fromEntityId": "movies.film.the-matrix",
    "toEntityId": null,
    "objectText": "cyberpunk games",
    "templateIds": [
      "entertainment.template.005"
    ],
    "finalWordIds": [
      "movies.final_word.matrix"
    ],
    "difficulty": 2,
    "importance": 8,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.006",
    "subject": "entertainment",
    "relationshipType": "music_video_film_overlap",
    "fromEntityId": "music.culture.music-video",
    "toEntityId": "movies.industry.hollywood",
    "objectText": null,
    "templateIds": [
      "entertainment.template.005"
    ],
    "finalWordIds": [
      "movies.final_word.hollywood"
    ],
    "difficulty": 2,
    "importance": 7,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.007",
    "subject": "entertainment",
    "relationshipType": "franchise_culture_overlap",
    "fromEntityId": "movies.franchise.marvel-cinematic-universe",
    "toEntityId": null,
    "objectText": "licensed video games",
    "templateIds": [
      "entertainment.template.005"
    ],
    "finalWordIds": [
      "movies.final_word.marvel"
    ],
    "difficulty": 2,
    "importance": 8,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.008",
    "subject": "entertainment",
    "relationshipType": "anime_game_overlap",
    "fromEntityId": "movies.studio.studio-ghibli",
    "toEntityId": "gaming.game.the-legend-of-zelda",
    "objectText": null,
    "templateIds": [
      "entertainment.template.003"
    ],
    "finalWordIds": [
      "gaming.final_word.zelda"
    ],
    "difficulty": 2,
    "importance": 6,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.009",
    "subject": "entertainment",
    "relationshipType": "pop_culture_platform_overlap",
    "fromEntityId": "gaming.game.fortnite",
    "toEntityId": "music.culture.music-video",
    "objectText": null,
    "templateIds": [
      "entertainment.template.005"
    ],
    "finalWordIds": [
      "music.final_word.video"
    ],
    "difficulty": 2,
    "importance": 7,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.cross_relationship.010",
    "subject": "entertainment",
    "relationshipType": "song_contest_screen_overlap",
    "fromEntityId": "music.event.eurovision-song-contest",
    "toEntityId": null,
    "objectText": "televised entertainment",
    "templateIds": [
      "entertainment.template.002"
    ],
    "finalWordIds": [
      "music.final_word.eurovision"
    ],
    "difficulty": 2,
    "importance": 7,
    "tags": [
      "cross_subject"
    ]
  }
];
