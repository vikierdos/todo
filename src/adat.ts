export type AllapotTipus = "folyamatban" | "törölve" | "létrehozva" | "kész"
export interface TodoTipus {
    id: number,
    tennivalo: string,
    allapot: AllapotTipus
}

export const TODOLISTA: TodoTipus[] = [
    {
        id: 1,
        tennivalo: "Tanulni a dolgozatra",
        allapot: "folyamatban"
    },
    {
        id: 2,
        tennivalo: "contextes feladat önállóan",
        allapot: "létrehozva"
    },
    {
        id: 3,
        tennivalo: "Bevásárlás a héten",
        allapot: "létrehozva"
    },
    {
        id: 4,
        tennivalo: "Futás a parkban",
        allapot: "kész"
    },
    {
        id: 5,
        tennivalo: "E-mail válaszok elküldése",
        allapot: "folyamatban"
    },
    {
        id: 6,
        tennivalo: "Szobatisztítás",
        allapot: "létrehozva"
    },
    {
        id: 7,
        tennivalo: "Könyv elolvasása",
        allapot: "kész"
    },
    {
        id: 8,
        tennivalo: "Pénzügyi terv készítése",
        allapot: "folyamatban"
    },
    {
        id: 9,
        tennivalo: "Házi feladat megoldása",
        allapot: "létrehozva"
    },
    {
        id: 10,
        tennivalo: "Projekt lead előkészítése",
        allapot: "folyamatban"
    },
    {
        id: 11,
        tennivalo: "Orvosi időpont egyeztetése",
        allapot: "törölve"
    },
    {
        id: 12,
        tennivalo: "Barátokkal találkozó szervezése",
        allapot: "kész"
    }
]