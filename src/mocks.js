const subjects = {
  C1: false,
  APC: false,
  DIAC: false,
  EA: false,
  IE: false,
  C2: false,
  Física1: false,
  FisicaExperimental1: false,
  IAL: false,
  PE: false,
  DS: false,
  Métodos: false,
  EE: false,
  Humanidades: false,
  TED1: false,
  PED1: false,
  OO: false,
  MD1: false,
  GPEQ: false,
  MDS: false,
  EDA1: false,
  FAC: false,
  MD2: false,
  PI1: false,
  IHC: false,
  Requisitos: false,
  SBD1: false,
  FSO: false,
  Compiladores1: false,
  EDA2: false,
  Qualidade: false,
  Testes: false,
  Desenho: false,
  FRC: false,
  SBD2: false,
  PA: false,
  TecProg: false,
  Paradigmas: false,
  FSE: false,
  PPD: false,
  EPS: false,
  GCES: false,
  PI2: false,
};

const priorities = {
  APC: ["DS", "OO", "EDA1"],
  C1: ["C2", "PE", "PA"],
  EA: [],
  DIAC: ["IHC"],
  IE: [],
  C2: ["Métodos"],
  Física1: [],
  FisicaExperimental1: [],
  IAL: ["TED1", "PED1"],
  PE: [],
  DS: [],
  Métodos: [],
  EE: ["GPEQ"],
  Humanidades: [],
  TED1: ["FAC"],
  PED1: [],
  OO: ["MDS", "PI1", "Paradigmas"],
  MD1: ["MD2"],
  GPEQ: ["Qualidade"],
  MDS: ["IHC", "Requisitos", "Testes"],
  EDA1: ["Compiladores1", "EDA2", "PA"],
  FAC: ["FSO"],
  MD2: ["SBD1"],
  PI1: [],
  IHC: ["Qualidade"],
  Requisitos: ["Desenho"],
  SBD1: ["SBD2"],
  FSO: ["FRC", "FSE"],
  Compiladores1: ["Paradigmas"],
  EDA2: ["PPD"],
  Qualidade: [],
  Testes: ["TecProg", "GCES"],
  Desenho: ["TecProg"],
  FRC: ["PPD"],
  SBD2: [],
  PA: [],
  TecProg: ["EPS"],
  Paradigmas: [],
  FSE: [],
  PPD: [],
  EPS: [],
  GCES: [],
  PI2: [],
};

const schedule = {
  C1: [
    {colunas: [0, 2, 4], linhas: [1, 1, 1]},
    {colunas: [0, 1, 3], linhas: [0, 0, 0]},
    {colunas: [0, 1, 3], linhas: [3, 3, 3]}
  ],
  APC: [
    {colunas: [0, 1, 3], linhas: [4, 0, 0]},
    {colunas: [0, 2, 4], linhas: [3, 1, 1]},
    {colunas: [0, 2, 4], linhas: [1, 3, 3]},
  ],
  DIAC: [
    {colunas: [0, 2, 4], linhas: [0, 0, 0]},
    {colunas: [1, 3, 4], linhas: [4, 4, 4]},
    {colunas: [0, 1, 3], linhas: [1, 1, 1]}
],
  EA: [
    {colunas: [1, 3], linhas: [1, 1]},
    {colunas: [2, 4], linhas: [0, 0]},
    {colunas: [0, 2], linhas: [4, 4]}
  ],
  IE: [
    {colunas: [0], linhas: [3]},
    {colunas: [2], linhas: [3]},
    {colunas: [0], linhas: [0]}
  ],
  C2: [
    {colunas: [0, 2, 4], linhas: [0, 0, 0]},
    {colunas: [1, 3, 4], linhas: [3, 3, 3]},
    {colunas: [0, 1, 3], linhas: [1, 1, 1]}
],
  Física1: [
    {colunas: [0, 2], linhas: [4, 4]},
    {colunas: [1, 3], linhas: [4, 4]},
    {colunas: [2, 4], linhas: [3, 3]},
    {colunas: [1, 3], linhas: [0, 0]}
  ],
  FisicaExperimental1: [
    {colunas: [0], linhas: [3]},
    {colunas: [0], linhas: [4]},
    {colunas: [1], linhas: [1]},
    {colunas: [3], linhas: [1]},
    {colunas: [4], linhas: [3]},
    {colunas: [4], linhas: [4]},
    {colunas: [4], linhas: [1]},
    {colunas: [1], linhas: [4]},
    {colunas: [2], linhas: [1]},
    {colunas: [1], linhas: [3]},
    {colunas: [0], linhas: [1]},
    {colunas: [3], linhas: [3]},
    {colunas: [3], linhas: [4]}
  ],
  IAL: [
    {colunas: [1, 3], linhas: [0, 0]},
    {colunas: [0, 2], linhas: [1, 1]},
    {colunas: [2, 4], linhas: [3, 3]},
    {colunas: [1, 3], linhas: [1, 1]}
  ],
  PE: [
    {colunas: [2, 4], linhas: [3, 3]},
    {colunas: [2, 4], linhas: [1, 1]}
  ],
  DS: [
    {colunas: [0, 4], linhas: [4, 4]},
  ],
  Métodos: [
    {colunas: [0, 2], linhas: [0, 0]},
    {colunas: [0, 2], linhas: [4, 4]},
    {colunas: [2, 4], linhas: [4, 4]},
    {colunas: [1, 3], linhas: [0, 0]}
  ],
  EE: [
    {colunas: [2, 4], linhas: [4, 4]},
    {colunas: [1, 3], linhas: [1, 1]},
    {colunas: [3, 4], linhas: [0, 0]}
  ],
  Humanidades: [
    {colunas: [1, 3], linhas: [3, 3]},
    {colunas: [2, 4], linhas: [3, 3]}
  ],
  TED1: [
    {colunas: [2, 4], linhas: [0, 0]},
    {colunas: [2, 4], linhas: [3, 3]}
  ],
  PED1: [
    {colunas: [4], linhas: [4]},
    {colunas: [2], linhas: [4]},
    {colunas: [0], linhas: [1]},
    {colunas: [0], linhas: [4]},
    {colunas: [0], linhas: [3]},
    {colunas: [0], linhas: [0]},
    {colunas: [0], linhas: [1]},
    {colunas: [1], linhas: [0]},
    {colunas: [1], linhas: [1]},
    {colunas: [3], linhas: [1]},
    {colunas: [4], linhas: [1]},
    {colunas: [3], linhas: [0]},
    {colunas: [4], linhas: [0]}
  ],
  OO: [
    {colunas: [0, 2], linhas: [3, 3]},
    {colunas: [0, 2], linhas: [0, 0]},
    {colunas: [0, 2], linhas: [4, 4]}
  ],
  MD1: [
    {colunas: [2, 4], linhas: [3, 3]},
    {colunas: [0, 4], linhas: [4, 4]}
  ],
  GPEQ: [
    {colunas: [1, 3], linhas: [3, 3]},
    {colunas: [1, 3], linhas: [4, 4]}
  ],
  MDS: [
    {colunas: [1, 3], linhas: [1, 1]},
    {colunas: [1, 3], linhas: [4, 4]},
    {colunas: [1, 3], linhas: [1, 1]}
  ],
  EDA1: [
    {colunas: [1, 3], linhas: [3, 3]},
    {colunas: [1, 3], linhas: [1, 1]},
    {colunas: [1, 3], linhas: [1, 1]}
  ],
  FAC: [
    {colunas: [0, 2], linhas: [1, 1]},
    {colunas: [0, 4], linhas: [0, 0]}
  ],
  MD2: [
    {colunas: [0, 4], linhas: [3, 3]}
],
  PI1: [
    {colunas: [0, 2], linhas: [4, 4]}
  ],
  IHC: [
    {colunas: [1, 3], linhas: [0, 0]},
    {colunas: [0, 2], linhas: [1, 1]}
  ],
  Requisitos: [
    {colunas: [1, 3], linhas: [1, 1]},
    {colunas: [1, 3], linhas: [3, 3]}
  ],
  SBD1: [
    {colunas: [1, 3], linhas: [3, 3]}
  ],
  FSO: [
    {colunas: [0, 2], linhas: [4, 4]}
  ],
  Compiladores1: [
    {colunas: [2, 4], linhas: [3, 3]}
  ],
  EDA2: [
    {colunas: [0, 2], linhas: [0, 0]}
  ],
  Qualidade: [
    {colunas: [1, 3], linhas: [1, 1]}
  ],
  Testes: [
    {colunas: [0, 2], linhas: [4, 4]},
    {colunas: [0, 2], linhas: [5, 5]}
  ],
  Desenho: [
    {colunas: [0, 4], linhas: [0, 0]}
  ],
  FRC: [
    {colunas: [0, 2], linhas: [4, 4]}
  ],
  SBD2: [
    {colunas: [1, 3], linhas: [0, 0]}
],
  PA: [
    {colunas: [0, 4], linhas: [1, 1]}
  ],
  TecProg: [
    {colunas: [0, 2], linhas: [4, 4]}
  ],
  Paradigmas: [
    {colunas: [0, 4], linhas: [1, 1]},
    {colunas: [0, 2], linhas: [3, 3]}
  ],
  FSE: [
    {colunas: [1, 3], linhas: [1, 1]}
  ],
  PPD: [
    {colunas: [2, 4], linhas: [1, 1]}
  ],
  EPS: [
    {colunas: [1, 3], linhas: [3, 3]}
  ],
  GCES: [
    {colunas: [1, 3], linhas: [4, 4]}
  ],
  PI2: [
    {colunas: [2, 4, 4], linhas: [4, 3, 4]}
  ],
}


export { subjects, priorities, schedule };
