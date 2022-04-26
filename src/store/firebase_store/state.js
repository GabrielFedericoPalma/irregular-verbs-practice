export default function () {
  return {
    ABCIndex: [],  
    dataGlobal: [],
    verbList: [],
    dataFirstLetters: null,
    dataCache : {'Verb_List':[{
      "ID" : 0,
      "INFINITIVE" : "arise",
      "PARTICIPLE" : "arisen",
      "PAST" : "arose",
      "SPANISH" : "surgir"
    }, {
      "ID" : 1,
      "INFINITIVE" : "awake",
      "PARTICIPLE" : "awoke",
      "PAST" : "awoke",
      "SPANISH" : "despertarse"
    }, {
      "ID" : 2,
      "INFINITIVE" : "be",
      "PARTICIPLE" : "been",
      "PAST" : "was, were",
      "SPANISH" : "ser o estar"
    }, {
      "ID" : 3,
      "INFINITIVE" : "bear",
      "PARTICIPLE" : "borne",
      "PAST" : "bore",
      "SPANISH" : "soportar"
    }, {
      "ID" : 4,
      "INFINITIVE" : "beat",
      "PARTICIPLE" : "beaten",
      "PAST" : "beat",
      "SPANISH" : "batir"
    }, {
      "ID" : 5,
      "INFINITIVE" : "become",
      "PARTICIPLE" : "become",
      "PAST" : "became",
      "SPANISH" : "convertirse en"
    }, {
      "ID" : 6,
      "INFINITIVE" : "begin",
      "PARTICIPLE" : "begun",
      "PAST" : "began",
      "SPANISH" : "comenzar"
    }, {
      "ID" : 7,
      "INFINITIVE" : "bend",
      "PARTICIPLE" : "bent",
      "PAST" : "bent",
      "SPANISH" : "curvar"
    }, {
      "ID" : 8,
      "INFINITIVE" : "bet",
      "PARTICIPLE" : "bet",
      "PAST" : "bet",
      "SPANISH" : "APUESTA"
    }, {
      "ID" : 9,
      "INFINITIVE" : "bind",
      "PARTICIPLE" : "bound",
      "PAST" : "bound",
      "SPANISH" : "enlazar"
    }, {
      "ID" : 10,
      "INFINITIVE" : "bite",
      "PARTICIPLE" : "bitten",
      "PAST" : "bit",
      "SPANISH" : "picar"
    }, {
      "ID" : 11,
      "INFINITIVE" : "bleed",
      "PARTICIPLE" : "bled",
      "PAST" : "bled",
      "SPANISH" : "sangrar"
    }, {
      "ID" : 12,
      "INFINITIVE" : "blow",
      "PARTICIPLE" : "blown",
      "PAST" : "blew",
      "SPANISH" : "soplar"
    }, {
      "ID" : 13,
      "INFINITIVE" : "break",
      "PARTICIPLE" : "broken",
      "PAST" : "broke",
      "SPANISH" : "pausa"
    }, {
      "ID" : 14,
      "INFINITIVE" : "bring",
      "PARTICIPLE" : "brought",
      "PAST" : "brought",
      "SPANISH" : "traer"
    }, {
      "ID" : 15,
      "INFINITIVE" : "build",
      "PARTICIPLE" : "built",
      "PAST" : "built",
      "SPANISH" : "construir"
    }, {
      "ID" : 16,
      "INFINITIVE" : "burst",
      "PARTICIPLE" : "burst",
      "PAST" : "burst",
      "SPANISH" : "reventar"
    }, {
      "ID" : 17,
      "INFINITIVE" : "buy",
      "PARTICIPLE" : "bought",
      "PAST" : "bought",
      "SPANISH" : "comprar"
    }, {
      "ID" : 18,
      "INFINITIVE" : "catch",
      "PARTICIPLE" : "caught",
      "PAST" : "caught",
      "SPANISH" : "atrapar"
    }, {
      "ID" : 19,
      "INFINITIVE" : "choose",
      "PARTICIPLE" : "chosen",
      "PAST" : "chose",
      "SPANISH" : "elegir"
    }, {
      "ID" : 20,
      "INFINITIVE" : "come",
      "PARTICIPLE" : "come",
      "PAST" : "came",
      "SPANISH" : "venir"
    }, {
      "ID" : 21,
      "INFINITIVE" : "cost",
      "PARTICIPLE" : "cost",
      "PAST" : "cost",
      "SPANISH" : "costar"
    }, {
      "ID" : 22,
      "INFINITIVE" : "creep",
      "PARTICIPLE" : "crept",
      "PAST" : "crept",
      "SPANISH" : "arrastrarse"
    }, {
      "ID" : 23,
      "INFINITIVE" : "cut",
      "PARTICIPLE" : "cut",
      "PAST" : "cut",
      "SPANISH" : "cortar"
    }, {
      "ID" : 24,
      "INFINITIVE" : "deal",
      "PARTICIPLE" : "dealt",
      "PAST" : "dealt",
      "SPANISH" : "negociar"
    }, {
      "ID" : 25,
      "INFINITIVE" : "dive",
      "PARTICIPLE" : "dived",
      "PAST" : "dove",
      "SPANISH" : "sumergirse"
    }, {
      "ID" : 26,
      "INFINITIVE" : "do",
      "PARTICIPLE" : "done",
      "PAST" : "did",
      "SPANISH" : "hacer"
    }, {
      "ID" : 27,
      "INFINITIVE" : "draw",
      "PARTICIPLE" : "drawn",
      "PAST" : "drew",
      "SPANISH" : "dibujar"
    }, {
      "ID" : 28,
      "INFINITIVE" : "dream",
      "PARTICIPLE" : "dreamt",
      "PAST" : "dreamt",
      "SPANISH" : "soñar"
    }, {
      "ID" : 29,
      "INFINITIVE" : "drink",
      "PARTICIPLE" : "drunk",
      "PAST" : "drank",
      "SPANISH" : "beber"
    }, {
      "ID" : 30,
      "INFINITIVE" : "drive",
      "PARTICIPLE" : "driven",
      "PAST" : "drove",
      "SPANISH" : "conducir"
    }, {
      "ID" : 31,
      "INFINITIVE" : "eat",
      "PARTICIPLE" : "eaten",
      "PAST" : "ate",
      "SPANISH" : "comer"
    }, {
      "ID" : 32,
      "INFINITIVE" : "fall",
      "PARTICIPLE" : "fallen",
      "PAST" : "fell",
      "SPANISH" : "caer"
    }, {
      "ID" : 33,
      "INFINITIVE" : "feed",
      "PARTICIPLE" : "fed",
      "PAST" : "fed",
      "SPANISH" : "alimentar"
    }, {
      "ID" : 34,
      "INFINITIVE" : "feel",
      "PARTICIPLE" : "felt",
      "PAST" : "felt",
      "SPANISH" : "sentir"
    }, {
      "ID" : 35,
      "INFINITIVE" : "fight",
      "PARTICIPLE" : "fought",
      "PAST" : "fought",
      "SPANISH" : "luchar"
    }, {
      "ID" : 36,
      "INFINITIVE" : "find",
      "PARTICIPLE" : "found",
      "PAST" : "found",
      "SPANISH" : "encontrar"
    }, {
      "ID" : 37,
      "INFINITIVE" : "fit",
      "PARTICIPLE" : "fit",
      "PAST" : "fit",
      "SPANISH" : "encajar"
    }, {
      "ID" : 38,
      "INFINITIVE" : "flee",
      "PARTICIPLE" : "fled",
      "PAST" : "fled",
      "SPANISH" : "huir"
    }, {
      "ID" : 39,
      "INFINITIVE" : "fling",
      "PARTICIPLE" : "flung",
      "PAST" : "flung",
      "SPANISH" : "arrojar"
    }, {
      "ID" : 40,
      "INFINITIVE" : "fly",
      "PARTICIPLE" : "flown",
      "PAST" : "flew",
      "SPANISH" : "volar"
    }, {
      "ID" : 41,
      "INFINITIVE" : "forbid",
      "PARTICIPLE" : "forbidden",
      "PAST" : "forbade",
      "SPANISH" : "prohibir"
    }, {
      "ID" : 42,
      "INFINITIVE" : "forget",
      "PARTICIPLE" : "forgot",
      "PAST" : "forgot",
      "SPANISH" : "olvidar"
    }, {
      "ID" : 43,
      "INFINITIVE" : "forgive",
      "PARTICIPLE" : "forgiven",
      "PAST" : "forgave",
      "SPANISH" : "perdonar"
    }, {
      "ID" : 44,
      "INFINITIVE" : "freeze",
      "PARTICIPLE" : "frozen",
      "PAST" : "froze",
      "SPANISH" : "congelar"
    }, {
      "ID" : 45,
      "INFINITIVE" : "get",
      "PARTICIPLE" : "gotten",
      "PAST" : "got",
      "SPANISH" : "obtener"
    }, {
      "ID" : 46,
      "INFINITIVE" : "give",
      "PARTICIPLE" : "given",
      "PAST" : "gave",
      "SPANISH" : "dar"
    }, {
      "ID" : 47,
      "INFINITIVE" : "go",
      "PARTICIPLE" : "gone",
      "PAST" : "went",
      "SPANISH" : "ir"
    }, {
      "ID" : 48,
      "INFINITIVE" : "grow",
      "PARTICIPLE" : "grown",
      "PAST" : "grew",
      "SPANISH" : ""
    }, {
      "ID" : 49,
      "INFINITIVE" : "hang",
      "PARTICIPLE" : "hung",
      "PAST" : "hung",
      "SPANISH" : ""
    }, {
      "ID" : 50,
      "INFINITIVE" : "have",
      "PARTICIPLE" : "had",
      "PAST" : "had",
      "SPANISH" : ""
    }, {
      "ID" : 51,
      "INFINITIVE" : "hear",
      "PARTICIPLE" : "heard",
      "PAST" : "heard",
      "SPANISH" : ""
    }, {
      "ID" : 52,
      "INFINITIVE" : "hide",
      "PARTICIPLE" : "hidden",
      "PAST" : "hid",
      "SPANISH" : ""
    }, {
      "ID" : 53,
      "INFINITIVE" : "hit",
      "PARTICIPLE" : "hit",
      "PAST" : "hit",
      "SPANISH" : ""
    }, {
      "ID" : 54,
      "INFINITIVE" : "hold",
      "PARTICIPLE" : "held",
      "PAST" : "held",
      "SPANISH" : ""
    }, {
      "ID" : 55,
      "INFINITIVE" : "hurt",
      "PARTICIPLE" : "hurt",
      "PAST" : "hurt",
      "SPANISH" : ""
    }, {
      "ID" : 56,
      "INFINITIVE" : "keep",
      "PARTICIPLE" : "kept",
      "PAST" : "kept",
      "SPANISH" : ""
    }, {
      "ID" : 57,
      "INFINITIVE" : "kneel",
      "PARTICIPLE" : "knelt",
      "PAST" : "knelt",
      "SPANISH" : ""
    }, {
      "ID" : 58,
      "INFINITIVE" : "knit",
      "PARTICIPLE" : "knitted",
      "PAST" : "knitted",
      "SPANISH" : ""
    }, {
      "ID" : 59,
      "INFINITIVE" : "know",
      "PARTICIPLE" : "known",
      "PAST" : "knew",
      "SPANISH" : ""
    }, {
      "ID" : 60,
      "INFINITIVE" : "lay",
      "PARTICIPLE" : "laid",
      "PAST" : "laid",
      "SPANISH" : ""
    }, {
      "ID" : 61,
      "INFINITIVE" : "lead",
      "PARTICIPLE" : "led",
      "PAST" : "led",
      "SPANISH" : ""
    }, {
      "ID" : 62,
      "INFINITIVE" : "leave",
      "PARTICIPLE" : "left",
      "PAST" : "left",
      "SPANISH" : ""
    }, {
      "ID" : 63,
      "INFINITIVE" : "lend",
      "PARTICIPLE" : "lent",
      "PAST" : "lent",
      "SPANISH" : ""
    }, {
      "ID" : 64,
      "INFINITIVE" : "let",
      "PARTICIPLE" : "let",
      "PAST" : "let",
      "SPANISH" : ""
    }, {
      "ID" : 65,
      "INFINITIVE" : "lie",
      "PARTICIPLE" : "lain",
      "PAST" : "lay",
      "SPANISH" : ""
    }, {
      "ID" : 66,
      "INFINITIVE" : "light",
      "PARTICIPLE" : "lit",
      "PAST" : "lit",
      "SPANISH" : ""
    }, {
      "ID" : 67,
      "INFINITIVE" : "lose",
      "PARTICIPLE" : "lost",
      "PAST" : "lost",
      "SPANISH" : ""
    }, {
      "ID" : 68,
      "INFINITIVE" : "make",
      "PARTICIPLE" : "made",
      "PAST" : "made",
      "SPANISH" : ""
    }, {
      "ID" : 69,
      "INFINITIVE" : "mean",
      "PARTICIPLE" : "meant",
      "PAST" : "meant",
      "SPANISH" : ""
    }, {
      "ID" : 70,
      "INFINITIVE" : "meet",
      "PARTICIPLE" : "met",
      "PAST" : "met",
      "SPANISH" : ""
    }, {
      "ID" : 71,
      "INFINITIVE" : "pay",
      "PARTICIPLE" : "paid",
      "PAST" : "paid",
      "SPANISH" : ""
    }, {
      "ID" : 72,
      "INFINITIVE" : "plead",
      "PARTICIPLE" : "pled",
      "PAST" : "pleaded",
      "SPANISH" : ""
    }, {
      "ID" : 73,
      "INFINITIVE" : "prove",
      "PARTICIPLE" : "proven",
      "PAST" : "proved",
      "SPANISH" : ""
    }, {
      "ID" : 74,
      "INFINITIVE" : "put",
      "PARTICIPLE" : "put",
      "PAST" : "put",
      "SPANISH" : ""
    }, {
      "ID" : 75,
      "INFINITIVE" : "quit",
      "PARTICIPLE" : "quit",
      "PAST" : "quit",
      "SPANISH" : ""
    }, {
      "ID" : 76,
      "INFINITIVE" : "read",
      "PARTICIPLE" : "read",
      "PAST" : "read",
      "SPANISH" : ""
    }, {
      "ID" : 77,
      "INFINITIVE" : "ride",
      "PARTICIPLE" : "ridden",
      "PAST" : "rode",
      "SPANISH" : ""
    }, {
      "ID" : 78,
      "INFINITIVE" : "ring",
      "PARTICIPLE" : "rung",
      "PAST" : "rang",
      "SPANISH" : ""
    }, {
      "ID" : 79,
      "INFINITIVE" : "rise",
      "PARTICIPLE" : "risen",
      "PAST" : "rose",
      "SPANISH" : ""
    }, {
      "ID" : 80,
      "INFINITIVE" : "run",
      "PARTICIPLE" : "run",
      "PAST" : "ran",
      "SPANISH" : ""
    }, {
      "ID" : 81,
      "INFINITIVE" : "say",
      "PARTICIPLE" : "said",
      "PAST" : "said",
      "SPANISH" : ""
    }, {
      "ID" : 82,
      "INFINITIVE" : "see",
      "PARTICIPLE" : "seen",
      "PAST" : "saw",
      "SPANISH" : ""
    }, {
      "ID" : 83,
      "INFINITIVE" : "seek",
      "PARTICIPLE" : "sought",
      "PAST" : "sought",
      "SPANISH" : ""
    }, {
      "ID" : 84,
      "INFINITIVE" : "sell",
      "PARTICIPLE" : "sold",
      "PAST" : "sold",
      "SPANISH" : ""
    }, {
      "ID" : 85,
      "INFINITIVE" : "send",
      "PARTICIPLE" : "sent",
      "PAST" : "sent",
      "SPANISH" : ""
    }, {
      "ID" : 86,
      "INFINITIVE" : "set",
      "PARTICIPLE" : "set",
      "PAST" : "set",
      "SPANISH" : ""
    }, {
      "ID" : 87,
      "INFINITIVE" : "sew",
      "PARTICIPLE" : "sewn",
      "PAST" : "sewed",
      "SPANISH" : ""
    }, {
      "ID" : 88,
      "INFINITIVE" : "shake",
      "PARTICIPLE" : "shaken",
      "PAST" : "shook",
      "SPANISH" : ""
    }, {
      "ID" : 89,
      "INFINITIVE" : "shine",
      "PARTICIPLE" : "shone",
      "PAST" : "shone",
      "SPANISH" : ""
    }, {
      "ID" : 90,
      "INFINITIVE" : "shoot",
      "PARTICIPLE" : "shot",
      "PAST" : "shot",
      "SPANISH" : ""
    }, {
      "ID" : 91,
      "INFINITIVE" : "show",
      "PARTICIPLE" : "shown",
      "PAST" : "showed",
      "SPANISH" : ""
    }, {
      "ID" : 92,
      "INFINITIVE" : "shrink",
      "PARTICIPLE" : "shrunk",
      "PAST" : "shrank",
      "SPANISH" : ""
    }, {
      "ID" : 93,
      "INFINITIVE" : "shut",
      "PARTICIPLE" : "shut",
      "PAST" : "shut",
      "SPANISH" : ""
    }, {
      "ID" : 94,
      "INFINITIVE" : "sing",
      "PARTICIPLE" : "sung",
      "PAST" : "sang",
      "SPANISH" : ""
    }, {
      "ID" : 95,
      "INFINITIVE" : "sink",
      "PARTICIPLE" : "sunk",
      "PAST" : "sank",
      "SPANISH" : ""
    }, {
      "ID" : 96,
      "INFINITIVE" : "sit",
      "PARTICIPLE" : "sat",
      "PAST" : "sat",
      "SPANISH" : ""
    }, {
      "ID" : 97,
      "INFINITIVE" : "slay",
      "PARTICIPLE" : "slain",
      "PAST" : "slew",
      "SPANISH" : ""
    }, {
      "ID" : 98,
      "INFINITIVE" : "sleep",
      "PARTICIPLE" : "slept",
      "PAST" : "slept",
      "SPANISH" : ""
    }, {
      "ID" : 99,
      "INFINITIVE" : "slide",
      "PARTICIPLE" : "slid",
      "PAST" : "slid",
      "SPANISH" : ""
    }, {
      "ID" : 100,
      "INFINITIVE" : "slit",
      "PARTICIPLE" : "slit",
      "PAST" : "slit",
      "SPANISH" : ""
    }, {
      "ID" : 101,
      "INFINITIVE" : "speak",
      "PARTICIPLE" : "spoken",
      "PAST" : "spoke",
      "SPANISH" : ""
    }, {
      "ID" : 102,
      "INFINITIVE" : "spend",
      "PARTICIPLE" : "spent",
      "PAST" : "spent",
      "SPANISH" : ""
    }, {
      "ID" : 103,
      "INFINITIVE" : "spin",
      "PARTICIPLE" : "spun",
      "PAST" : "spun",
      "SPANISH" : ""
    }, {
      "ID" : 104,
      "INFINITIVE" : "split",
      "PARTICIPLE" : "split",
      "PAST" : "split",
      "SPANISH" : ""
    }, {
      "ID" : 105,
      "INFINITIVE" : "spread",
      "PARTICIPLE" : "spread",
      "PAST" : "spread",
      "SPANISH" : ""
    }, {
      "ID" : 106,
      "INFINITIVE" : "spring",
      "PARTICIPLE" : "sprung",
      "PAST" : "sprang",
      "SPANISH" : ""
    }, {
      "ID" : 107,
      "INFINITIVE" : "stand",
      "PARTICIPLE" : "stood",
      "PAST" : "stood",
      "SPANISH" : ""
    }, {
      "ID" : 108,
      "INFINITIVE" : "steal",
      "PARTICIPLE" : "stolen",
      "PAST" : "stole",
      "SPANISH" : ""
    }, {
      "ID" : 109,
      "INFINITIVE" : "stick",
      "PARTICIPLE" : "stuck",
      "PAST" : "stuck",
      "SPANISH" : ""
    }, {
      "ID" : 110,
      "INFINITIVE" : "sting",
      "PARTICIPLE" : "stung",
      "PAST" : "stung",
      "SPANISH" : ""
    }, {
      "ID" : 111,
      "INFINITIVE" : "stink",
      "PARTICIPLE" : "stunk",
      "PAST" : "stank",
      "SPANISH" : ""
    }, {
      "ID" : 112,
      "INFINITIVE" : "stride",
      "PARTICIPLE" : "stridden",
      "PAST" : "strode",
      "SPANISH" : ""
    }, {
      "ID" : 113,
      "INFINITIVE" : "strike",
      "PARTICIPLE" : "struck",
      "PAST" : "struck",
      "SPANISH" : ""
    }, {
      "ID" : 114,
      "INFINITIVE" : "string",
      "PARTICIPLE" : "strung",
      "PAST" : "strung",
      "SPANISH" : ""
    }, {
      "ID" : 115,
      "INFINITIVE" : "swear",
      "PARTICIPLE" : "sworn",
      "PAST" : "swore",
      "SPANISH" : ""
    }, {
      "ID" : 116,
      "INFINITIVE" : "sweep",
      "PARTICIPLE" : "swept",
      "PAST" : "swept",
      "SPANISH" : ""
    }, {
      "ID" : 117,
      "INFINITIVE" : "swell",
      "PARTICIPLE" : "swollen",
      "PAST" : "swelled",
      "SPANISH" : ""
    }, {
      "ID" : 118,
      "INFINITIVE" : "swim",
      "PARTICIPLE" : "swum",
      "PAST" : "swam",
      "SPANISH" : ""
    }, {
      "ID" : 119,
      "INFINITIVE" : "swing",
      "PARTICIPLE" : "swung",
      "PAST" : "swing",
      "SPANISH" : ""
    }, {
      "ID" : 120,
      "INFINITIVE" : "take",
      "PARTICIPLE" : "taken",
      "PAST" : "took",
      "SPANISH" : ""
    }, {
      "ID" : 121,
      "INFINITIVE" : "teach",
      "PARTICIPLE" : "taught",
      "PAST" : "taught",
      "SPANISH" : ""
    }, {
      "ID" : 122,
      "INFINITIVE" : "tear",
      "PARTICIPLE" : "torn",
      "PAST" : "tore",
      "SPANISH" : ""
    }, {
      "ID" : 123,
      "INFINITIVE" : "tell",
      "PARTICIPLE" : "told",
      "PAST" : "told",
      "SPANISH" : ""
    }, {
      "ID" : 124,
      "INFINITIVE" : "think",
      "PARTICIPLE" : "thought",
      "PAST" : "thought",
      "SPANISH" : ""
    }, {
      "ID" : 125,
      "INFINITIVE" : "throw",
      "PARTICIPLE" : "thrown",
      "PAST" : "threw",
      "SPANISH" : ""
    }, {
      "ID" : 126,
      "INFINITIVE" : "understand",
      "PARTICIPLE" : "understood",
      "PAST" : "understood",
      "SPANISH" : ""
    }, {
      "ID" : 127,
      "INFINITIVE" : "wake up",
      "PARTICIPLE" : "woken up",
      "PAST" : "woke up",
      "SPANISH" : ""
    }, {
      "ID" : 128,
      "INFINITIVE" : "wear",
      "PARTICIPLE" : "worn",
      "PAST" : "wore",
      "SPANISH" : ""
    }, {
      "ID" : 129,
      "INFINITIVE" : "wed",
      "PARTICIPLE" : "wed",
      "PAST" : "wed",
      "SPANISH" : ""
    }, {
      "ID" : 130,
      "INFINITIVE" : "weep",
      "PARTICIPLE" : "wept",
      "PAST" : "wept",
      "SPANISH" : ""
    }, {
      "ID" : 131,
      "INFINITIVE" : "welcome",
      "PARTICIPLE" : "welcomed",
      "PAST" : "welcomed",
      "SPANISH" : ""
    }, {
      "ID" : 132,
      "INFINITIVE" : "wet",
      "PARTICIPLE" : "wet",
      "PAST" : "wet",
      "SPANISH" : ""
    }, {
      "ID" : 133,
      "INFINITIVE" : "win",
      "PARTICIPLE" : "won",
      "PAST" : "won",
      "SPANISH" : ""
    }, {
      "ID" : 134,
      "INFINITIVE" : "wring",
      "PARTICIPLE" : "wrung",
      "PAST" : "wrung",
      "SPANISH" : ""
    }, {
      "ID" : 135,
      "INFINITIVE" : "write",
      "PARTICIPLE" : "written",
      "PAST" : "wrote",
      "SPANISH" : ""
    }]}

  }
}
