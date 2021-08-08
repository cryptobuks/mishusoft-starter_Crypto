
export function NumberToText(value: any) {
    let fraction = Math.round(frac(value) * 100);
    let f_text = "";

    if (fraction > 0) {
        f_text = "AND " + convertNumber(fraction) + " PAISA";
    }

    return convertNumber(value) + " Taka " + f_text + " ONLY";
}

export function frac(f: number) {
    return f % 1;
}

export function convertNumber(number: number) {
    if ((number < 0) || (number > 999999999)) {
        return "NUMBER OUT OF RANGE!";
    }
    let Gn = Math.floor(number / 10000000);  /* Crore */
    number -= Gn * 10000000;
    let kn = Math.floor(number / 100000);     /* lakhs */
    number -= kn * 100000;
    let Hn = Math.floor(number / 1000);      /* thousand */
    number -= Hn * 1000;
    let Dn = Math.floor(number / 100);       /* Tens (deca) */
    number = number % 100;               /* Ones */
    let tn = Math.floor(number / 10);
    let one = Math.floor(number % 10);
    let res = "";

    if (Gn > 0) {
        res += (convertNumber(Gn) + " CRORE");
    }
    if (kn > 0) {
        res += (((res === "") ? "" : " ") +
            convertNumber(kn) + " LAKH");
    }
    if (Hn > 0) {
        res += (((res === "") ? "" : " ") +
            convertNumber(Hn) + " THOUSAND");
    }

    if (Dn) {
        res += (((res === "") ? "" : " ") +
            convertNumber(Dn) + " HUNDRED");
    }


    let ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN");
    let tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY");

    if (tn > 0 || one > 0) {
        if (!(res === "")) {
            res += " AND ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res === "") {
        res = "zero";
    }
    return res;
}
