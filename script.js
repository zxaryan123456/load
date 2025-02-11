// Updated data structure to allow multiple entries with the same load name
const data = {
BCACBM: [
{ emptySpeed: '100 kmph', loadedSpeed: '90 kmph', axleLoad: 'A-12.715' },
{ emptySpeed: '100 kmph', loadedSpeed: '90 kmph', axleLoad: 'B-12.680' }
],
BCBFG: [{ emptySpeed: '75 kmph', loadedSpeed: '75 kmph', axleLoad: '21.82t' }],
BCFCM: [{ emptySpeed: '65 kmph', loadedSpeed: '60 kmph', axleLoad: '22.9t' }],
BCLH: [{ emptySpeed: '40 kmph', loadedSpeed: '40 kmph', axleLoad: '20.32t' }],
BCLHA: [{ emptySpeed: '40 kmph', loadedSpeed: '40 kmph', axleLoad: '19.75t' }],
BCN: [
    { emptySpeed: "80 kmph", loadedSpeed: "75 kmph", axleLoad: "22.32t" },
    { emptySpeed: "80 kmph", loadedSpeed: "75 kmph", axleLoad: "20.32t" }
],
BCNA: [{ emptySpeed: '80 kmph', loadedSpeed: '75 kmph', axleLoad: '22.32t' }],
BCNAM1: [
    { emptySpeed: "80 kmph", loadedSpeed: "75 kmph", axleLoad: "22.32t" },
    { emptySpeed: "80 kmph", loadedSpeed: "60 kmph", axleLoad: "22.82t" }
],
BCNAHS: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BCNAHSM1: [
    { emptySpeed: "100 kmph", loadedSpeed: "75 kmph", axleLoad: "22.32t" },
    { emptySpeed: "100 kmph", loadedSpeed: "60 kmph", axleLoad: "22.82t" }
],
BCNHL: [{ emptySpeed: "70 kmph", loadedSpeed: "60 kmph", axleLoad: "22.9t" }],
BCNHSM1: [
    { emptySpeed: "90 kmph", loadedSpeed: "60 kmph", axleLoad: "22.82t" },
    { emptySpeed: "90 kmph", loadedSpeed: "75 kmph", axleLoad: "22.32t" }
],
BCNM1: [
    { emptySpeed: "80 kmph", loadedSpeed: "60 kmph", axleLoad: "22.82t" },
    { emptySpeed: "80 kmph", loadedSpeed: "75 kmph", axleLoad: "22.32t" }
],
BLCA: [{ emptySpeed: '75 kmph', loadedSpeed: '75 kmph', axleLoad: '20.32t' }],
BLCB: [{ emptySpeed: '75 kmph', loadedSpeed: '75 kmph', axleLoad: '20.32t' }],
BLCS: [{ emptySpeed: '65 kmph', loadedSpeed: '65 kmph', axleLoad: '22.32t(designated 25t)' }],
BLLA: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '18.8t' }],
BLLB: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '18.8t' }],
BOBR: [{ emptySpeed: "75 kmph", loadedSpeed: "70 kmph", axleLoad: "22.32t" }],
BOBRN: [
    { emptySpeed: "70 kmph", loadedSpeed: "75 kmph", axleLoad: "20.32t" },
    { emptySpeed: "65 kmph", loadedSpeed: "60 kmph", axleLoad: "22.32t" }
],
BOBRNM1: [{ emptySpeed: "80 kmph", loadedSpeed: "70 kmph", axleLoad: "22.32t" }],
BOBRM1: [{ emptySpeed: "75 kmph", loadedSpeed: "70 kmph", axleLoad: "22.32t" }],
BOBSNM1: [{ emptySpeed: '55 kmph', loadedSpeed: '45 kmph', axleLoad: '25t' }],
BOBYN: [{ emptySpeed: "75 kmph", loadedSpeed: "75 kmph", axleLoad: "20.32t" },
    { emptySpeed: "75 kmph", loadedSpeed: "60 kmph", axleLoad: "22.32t" }
],
BOMN: [{ emptySpeed: '70 kmph', loadedSpeed: '70 kmph', axleLoad: '16.40t' }],
BOST: [
    { emptySpeed: '80 kmph', loadedSpeed: '50 kmph', axleLoad: '22.32t' },
    { emptySpeed: '80 kmph', loadedSpeed: '75 kmph', axleLoad: '20.32t' }
],
BOSTHS: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BOSTHSM1: [{ emptySpeed: '80 kmph', loadedSpeed: '60 kmph', axleLoad: '22.32t' },
    { emptySpeed: '80 kmph', loadedSpeed: '60 kmph', axleLoad: '22.9t' }
],
BOSTHSM2: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.32t' }],
BOSTHSM3: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.32t' }],
BOYEL: [{ emptySpeed: '85 kmph', loadedSpeed: '45 kmph', axleLoad: '25t' }],
BOXN: [
  { emptySpeed: "80 kmph", loadedSpeed: "60 kmph", axleLoad: "22.82t" },
  { emptySpeed: "80 kmph", loadedSpeed: "75 kmph", axleLoad: "20.32t" },
  { emptySpeed: "80 kmph", loadedSpeed: "60 kmph", axleLoad: "22.32t" }
],
BOXNHA: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.82t' },
    { emptySpeed: '100 kmph', loadedSpeed: '90 kmph', axleLoad: '20.32t' }
],
BOXNHAM: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.82t' }],
BOXNHL: [
    { emptySpeed: '100 kmph', loadedSpeed: '45 kmph', axleLoad: '25t' },
    { emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.9t' }
],
BOXNS: [{ emptySpeed: '85 kmph', loadedSpeed: '45 kmph', axleLoad: '25t' }],
BOXNHS: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BOXNHSM1: [{ emptySpeed: "90 kmph", loadedSpeed: "75 kmph", axleLoad: "22.32t" }],
BOXNHSM2: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.82t' }],
BOXNEL: [{ emptySpeed: '85 kmph', loadedSpeed: '45 kmph', axleLoad: '25t' }],
BOXNM1: [
    { emptySpeed: "80 kmph", loadedSpeed: "60 kmph", axleLoad: "22.82t" },
    { emptySpeed: "80 kmph", loadedSpeed: "70 kmph", axleLoad: "22.32t" }
],
BOXNM2: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.82t' }],
BOXNR: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.9t' }],
BOXNRM2: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.9t' }],
BOXNRHS: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.9t' }],
BOXNLWM2: [{ emptySpeed: '100 kmph', loadedSpeed: '75 kmph', axleLoad: '22.82t' }],
BRHNEHS: [{ emptySpeed: '65 kmph', loadedSpeed: '65 kmph', axleLoad: '20.32t' }],
BRN: [{ emptySpeed: '80 kmph', loadedSpeed: '75 kmph', axleLoad: '20.3t' }],
BRNA: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BRNAM1: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BRNAHS: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BRNM1: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '20.32t' }],
BTALNM1: [{ emptySpeed: '100 kmph', loadedSpeed: '90 kmph', axleLoad: '20.03t' }],
BTAPM1: [{ emptySpeed: '65 kmph', loadedSpeed: '60 kmph', axleLoad: '21.921t' }],
BTPN: [{ emptySpeed: "80 kmph", loadedSpeed: "80 kmph", axleLoad: "20.32t" }],
BTPGLN: [{ emptySpeed: '90 kmph', loadedSpeed: '90 kmph', axleLoad: '19.8t' }],
BTFLN: [{ emptySpeed: '65 kmph', loadedSpeed: '65 kmph', axleLoad: '20.32t' }],
BTFLNM1: [{ emptySpeed: '100 kmph', loadedSpeed: '85 kmph', axleLoad: '20.32t' }],
BVCM: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '5.27t' }],
BVZC: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '7.0t' }],
BVZI: [{ emptySpeed: '100 kmph', loadedSpeed: '100 kmph', axleLoad: '5.875t' }],
BWTB: [{ emptySpeed: '60 kmph', loadedSpeed: '60 kmph', axleLoad: '22.9t' }],
BFNS: [
    { emptySpeed: "100 kmph", loadedSpeed: "100 kmph", axleLoad: "20.32t" },
    { emptySpeed: "65 kmph", loadedSpeed: "65 kmph", axleLoad: "22.9t" }
],
BFNSM: [{ emptySpeed: "95 kmph", loadedSpeed: "60 kmph", axleLoad: "22.9t" }],
BFNV: [{ emptySpeed: "100 kmph", loadedSpeed: "60 kmph", axleLoad: "22.9t" }],
BRSTN: [{ emptySpeed: "80 kmph", loadedSpeed: "70 kmph", axleLoad: "20.32t" }],
BLSSA: [{ emptySpeed: "65 kmph", loadedSpeed: "65 kmph", axleLoad: "22.9t" }],
BLSSB: [{ emptySpeed: "65 kmph", loadedSpeed: "65 kmph", axleLoad: "22.9t" }],
BCCNR: [{ emptySpeed: "100 kmph", loadedSpeed: "100 kmph", axleLoad: "10.5t" }],
};

const inputField = document.getElementById('loadInput');
const tableBody = document.getElementById('tableBody');

// Listen for input changes
inputField.addEventListener('input', function() {
    const inputValue = inputField.value.trim().toUpperCase();

    // Clear the table before adding new rows
    tableBody.innerHTML = '';

    // If input length is greater than 2, search for matches
    if (inputValue.length > 2) {
        let hasMatches = false;

        // Loop through the data to find matching entries
        for (const load in data) {
            if (load.startsWith(inputValue)) {
                hasMatches = true;

                // Loop through the array of entries for this load name
                data[load].forEach(loadData => {
                    const row = `<tr>
                                    <td>${load}</td>
                                    <td>${loadData.emptySpeed}</td>
                                    <td>${loadData.loadedSpeed}</td>
                                    <td>${loadData.axleLoad}</td>
                                </tr>`;
                    tableBody.innerHTML += row;  // Append each matching row to the table
                });
            }
        }

        // If no matches are found, show a message
        if (!hasMatches) {
            tableBody.innerHTML = '<tr><td colspan="4">No matching data found</td></tr>';
        }
    }
});
