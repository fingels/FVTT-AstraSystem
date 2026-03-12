export class DieAstra extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "a";

    /** @override */
    get total(){
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/astra-system/images/empty.png" />',
            "2": '<img src="modules/astra-system/images/empty.png" />',
            "3": '<img src="modules/astra-system/images/HalfStar.png" />',
            "4": '<img src="modules/astra-system/images/HalfStar.png" />',
			"5": '<img src="modules/astra-system/images/Star.png" />',
            "6": '<img src="modules/astra-system/images/Star.png" />'
        }[result.result];
    }
}
