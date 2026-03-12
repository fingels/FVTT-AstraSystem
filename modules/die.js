export class DieAstra extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "s";

    /** @override */
    get total(){
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/astra-system/images/S1_inCHAT.png" />',
            "2": '<img src="modules/astra-system/images/S2_inCHAT.png" />',
            "3": '<img src="modules/astra-system/images/F1_inCHAT.png" />',
            "4": '<img src="modules/astra-system/images/F2_inCHAT.png" />',
			"5": '<img src="modules/astra-system/images/D1_inCHAT.png" />',
            "6": '<img src="modules/astra-system/images/D1_inCHAT.png" />'
        }[result.result];
    }
}
