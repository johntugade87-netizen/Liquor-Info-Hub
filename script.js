const liquorData = {
  whiskey: {
    name: "Whiskey",
    info: "Whiskey is a distilled alcoholic beverage made from fermented grain mash. It’s aged in wooden casks, giving it its distinct amber color and rich, smoky flavor."
  },
  vodka: {
    name: "Vodka",
    info: "Vodka is a clear distilled spirit originating from Eastern Europe. It's known for its purity and versatility in cocktails."
  },
  rum: {
    name: "Rum",
    info: "Rum is made by fermenting and distilling sugarcane molasses or juice. It’s popular in tropical drinks and known for its sweet and spiced flavors."
  },
  tequila: {
    name: "Tequila",
    info: "Tequila is a Mexican spirit made from blue agave. It ranges from clear (Blanco) to golden (Añejo), with earthy, peppery, and sweet tones."
  },
  gin: {
    name: "Gin",
    info: "Gin is flavored with juniper berries and botanicals. It’s crisp, aromatic, and commonly used in cocktails like martinis and gin tonics."
  },
  brandy: {
    name: "Brandy",
    info: "Brandy is made by distilling wine. It's known for its warm, fruity flavor and is often enjoyed as an after-dinner drink."
  }
};

function showInfo(liquor) {
  document.getElementById('liquorName').textContent = liquorData[liquor].name;
  document.getElementById('liquorInfo').textContent = liquorData[liquor].info;
  document.getElementById('infoModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('infoModal');
  if (event.target === modal) {
    closeModal();
  }
};
