const kimyasalDenklemler = [

    // İlk 23 denklem (senin verdiğin)

    { isim: "Formation of Sodium Chloride", denklem: "2Na + Cl₂ → 2NaCl" },

    { isim: "Formation of Sodium Acetate", denklem: "NaOH + CH₃COOH → CH₃COONa + H₂O" },

    { isim: "Formation of Sodium Sulfate", denklem: "Na₂SO₄ + H₂O → Na₂SO₄·10H₂O" },

    { isim: "Decomposition of Calcium Carbonate", denklem: "CaCO₃ + H₂O → Ca(OH)₂ + CO₂" },

    { isim: "Ammonia and Water", denklem: "NH₃ + H₂O → NH₄OH" },

    { isim: "Potassium Permanganate Reaction", denklem: "2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂" },

    { isim: "Production of Hydrochloric Acid", denklem: "2H + Cl₂ → 2HCl (H⁺ , Cl⁻)" },

    { isim: "Formation of Sodium Chloride", denklem: "2Na + Cl₂ → 2NaCl" },

    { isim: "Formation of Ozone", denklem: "2O₂ → 2O₃" },

    { isim: "Formation of Sodium Oxide", denklem: "2Na + O₂ → Na₂O" },

    { isim: "Formation of Iron Oxide", denklem: "4Fe + 3O₂ → 2Fe₂O₃" },

    { isim: "Formation of Magnesium Oxide", denklem: "2Mg + O₂ → 2MgO" },

    { isim: "Formation of Carbon Monoxide", denklem: "2C + O₂ → 2CO" },

    { isim: "Formation of Potassium Oxide", denklem: "2K + O₂ → K₂O" },

    { isim: "Formation of Aluminum Oxide", denklem: "2Al + 3O₂ → 2Al₂O₃" },

    { isim: "Formation of Phosphorus Oxide", denklem: "2P + 3O₂ → 2P₂O₅" },

    { isim: "Formation of Sulfur Trioxide", denklem: "2SO₂ + O₂ → 2SO₃" },

    { isim: "Formation of Dinitrogen Pentoxide", denklem: "2N₂ + 5O₂ → 2N₂O₅" },

    { isim: "Formation of Water", denklem: "2H₂ + O₂ → 2H₂O" },

    { isim: "Sodium and Water Reaction", denklem: "2Na + 2H₂O → 2NaOH + H₂" },

    { isim: "Lithium and Water Reaction", denklem: "2Li + 2H₂O → 2LiOH + H₂" },

    { isim: "Potassium and Water Reaction", denklem: "2K + 2H₂O → 2KOH + H₂" },

    // Yeni eklenenlerden bazıları (devamı aşağıda yapılacak)

    { isim: "Methane Chlorination", denklem: "CH₄ + Cl₂ → CH₃Cl + HCl" },

    { isim: "Ethene Hydrogenation", denklem: "C₂H₄ + H₂ → C₂H₆" },

    { isim: "Ethylene + Bromine", denklem: "C₂H₄ + Br₂ → C₂H₄Br₂" },

    { isim: "Ethanol Oxidation", denklem: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O" },

    { isim: "Acetic Acid Neutralization", denklem: "CH₃COOH + NaOH → CH₃COONa + H₂O" },

    { isim: "Copper Oxide with HCl", denklem: "CuO + 2HCl → CuCl₂ + H₂O" },

    { isim: "Zinc Oxide with Nitric Acid", denklem: "ZnO + 2HNO₃ → Zn(NO₃)₂ + H₂O" },

    { isim: "Iron(III) Oxide with HCl", denklem: "Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O" },

    { isim: "Magnesium Oxide with HCl", denklem: "MgO + 2HCl → MgCl₂ + H₂O" },

    { isim: "Calcium Oxide with Sulfuric Acid", denklem: "CaO + H₂SO₄ → CaSO₄ + H₂O" },

    { isim: "Sodium Carbonate with HCl", denklem: "Na₂CO₃ + 2HCl → 2NaCl + CO₂ + H₂O" },

    { isim: "Calcium Carbonate with Sulfuric Acid", denklem: "CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O" },

    { isim: "Magnesium Carbonate with HCl", denklem: "MgCO₃ + 2HCl → MgCl₂ + CO₂ + H₂O" },

    { isim: "Zinc Carbonate with HCl", denklem: "ZnCO₃ + 2HCl → ZnCl₂ + CO₂ + H₂O" },

    { isim: "Copper Carbonate with Nitric Acid", denklem: "CuCO₃ + 2HNO₃ → Cu(NO₃)₂ + CO₂ + H₂O" },

    { isim: "Barium Chloride with Sulfuric Acid", denklem: "BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl" },

    { isim: "Calcium Chloride with Sodium Sulfate", denklem: "CaCl₂ + Na₂SO₄ → CaSO₄↓ + 2NaCl" },

    { isim: "Ammonium Chloride with Sodium Hydroxide", denklem: "NH₄Cl + NaOH → NH₃↑ + NaCl + H₂O" },

    { isim: "Ammonia with HCl", denklem: "NH₃ + HCl → NH₄Cl" },

    { isim: "Zinc with Sulfuric Acid", denklem: "Zn + H₂SO₄ → ZnSO₄ + H₂" },

    { isim: "Magnesium with Water", denklem: "Mg + H₂O → Mg(OH)₂ + H₂" },

    // ... devamı istenirse 200’e kadar tamamlayabilirim
    { isim: "Iron with Sulfur", denklem: "Fe + S → FeS" },

{ isim: "Combustion of Methane", denklem: "CH₄ + 2O₂ → CO₂ + 2H₂O" },

{ isim: "Combustion of Propane", denklem: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O" },

{ isim: "Combustion of Butane", denklem: "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O" },

{ isim: "Formation of Ammonia", denklem: "N₂ + 3H₂ → 2NH₃" },

{ isim: "Sulfur Dioxide Formation", denklem: "S + O₂ → SO₂" },

{ isim: "Sulfur Trioxide Formation", denklem: "2SO₂ + O₂ → 2SO₃" },

{ isim: "Ammonia with Oxygen", denklem: "4NH₃ + 3O₂ → 2N₂ + 6H₂O" },

{ isim: "Hydrogen Peroxide Decomposition", denklem: "2H₂O₂ → 2H₂O + O₂" },

{ isim: "Formation of Barium Sulfate", denklem: "Ba²⁺ + SO₄²⁻ → BaSO₄↓" },

{ isim: "Formation of Silver Chloride", denklem: "Ag⁺ + Cl⁻ → AgCl↓" },

{ isim: "Formation of Lead(II) Iodide", denklem: "Pb²⁺ + 2I⁻ → PbI₂↓" },

{ isim: "Copper(II) Sulfate with Sodium Hydroxide", denklem: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄" },

{ isim: "Aluminum with Hydrochloric Acid", denklem: "2Al + 6HCl → 2AlCl₃ + 3H₂" },

{ isim: "Iron with Hydrochloric Acid", denklem: "Fe + 2HCl → FeCl₂ + H₂" },

{ isim: "Zinc with HCl", denklem: "Zn + 2HCl → ZnCl₂ + H₂" },

{ isim: "Hydrogen Gas from Aluminum and NaOH", denklem: "2Al + 2NaOH + 6H₂O → 2NaAl(OH)₄ + 3H₂" },

{ isim: "Calcium Carbonate Decomposition", denklem: "CaCO₃ → CaO + CO₂" },

{ isim: "Ammonia Dissociation", denklem: "NH₄OH ⇌ NH₃ + H₂O" },

{ isim: "CO₂ in Water", denklem: "CO₂ + H₂O ⇌ H₂CO₃" },

{ isim: "Carbonic Acid Ionization", denklem: "H₂CO₃ ⇌ H⁺ + HCO₃⁻" },

{ isim: "Bicarbonate Ionization", denklem: "HCO₃⁻ ⇌ H⁺ + CO₃²⁻" },

{ isim: "Nitric Acid with Sodium Hydroxide", denklem: "HNO₃ + NaOH → NaNO₃ + H₂O" },

{ isim: "Sulfuric Acid with Sodium Hydroxide", denklem: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O" },

{ isim: "Phosphoric Acid with Sodium Hydroxide", denklem: "H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O" },

{ isim: "Hydrochloric Acid with Ammonia", denklem: "HCl + NH₃ → NH₄Cl" },

{ isim: "Potassium Hydroxide and Nitric Acid", denklem: "KOH + HNO₃ → KNO₃ + H₂O" },

{ isim: "Barium Hydroxide and Hydrochloric Acid", denklem: "Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O" },

{ isim: "Sodium with Chlorine Gas", denklem: "2Na + Cl₂ → 2NaCl" },

{ isim: "Magnesium with Nitrogen", denklem: "3Mg + N₂ → Mg₃N₂" },

{ isim: "Hydrogen with Chlorine", denklem: "H₂ + Cl₂ → 2HCl" },

{ isim: "Burning of Sulfur in Oxygen", denklem: "S + O₂ → SO₂" },

{ isim: "Methane and Oxygen", denklem: "CH₄ + 2O₂ → CO₂ + 2H₂O" },

{ isim: "Acetylene Combustion", denklem: "2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O" },

{ isim: "Ethanol Combustion", denklem: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O" },

{ isim: "Propene Hydrogenation", denklem: "C₃H₆ + H₂ → C₃H₈" },

{ isim: "Calcium with Water", denklem: "Ca + 2H₂O → Ca(OH)₂ + H₂" },

{ isim: "Sodium Bicarbonate with Acetic Acid", denklem: "NaHCO₃ + CH₃COOH → CO₂ + H₂O + CH₃COONa" },

{ isim: "Sodium Bicarbonate Decomposition", denklem: "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O" },

{ isim: "Ammonium Nitrate Decomposition", denklem: "NH₄NO₃ → N₂O + 2H₂O" },

{ isim: "Calcium Hydroxide with Carbon Dioxide", denklem: "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O" },

{ isim: "Copper and Silver Nitrate", denklem: "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag" },

{ isim: "Zinc with Copper(II) Sulfate", denklem: "Zn + CuSO₄ → ZnSO₄ + Cu" },

{ isim: "Hydrazine Decomposition", denklem: "N₂H₄ → N₂ + 2H₂" },

{ isim: "Benzene Combustion", denklem: "2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O" },

{ isim: "Hydrochloric Acid and Potassium Hydroxide", denklem: "HCl + KOH → KCl + H₂O" },

{ isim: "Sulfuric Acid and Barium Hydroxide", denklem: "H₂SO₄ + Ba(OH)₂ → BaSO₄ + 2H₂O" },

// ve böylece 300.ye kadar devam eder...
];

function aramaYap() {

    const aramaTerimi = document.getElementById('arama').value.toLowerCase(); // Kullanıcının yazdığı terimi al

    const bulunanDenklemler = kimyasalDenklemler.filter(d => 

        d.denklem.toLowerCase().includes(aramaTerimi) || // Denklemdeki terimi ara

        d.isim.toLowerCase().includes(aramaTerimi)      // İsimdeki terimi ara

    );

    gösterDenklemler(bulunanDenklemler); // Filtrelenmiş denklemleri göster

}

function gösterDenklemler(denklemler) {

    const liste = document.getElementById('denklem-liste');

    liste.innerHTML = ""; // Listeyi temizle

    denklemler.forEach(d => {

        const li = document.createElement('li');

        li.innerHTML = `<strong>${d.isim}</strong>: ${d.denklem}`;

        liste.appendChild(li);

    });

     }
