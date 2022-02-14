
function searvhingName(smartphons, name, condition, operatingSystem) {
  if (name) {
    const s = smartphons.filter(s => s.name.toLowerCase().match(name.toLowerCase()))
    return searvhingCondition(s, condition, operatingSystem)
  } else {
    const s = smartphons
    return searvhingCondition(s, condition, operatingSystem)
  }
}

function searvhingCondition(smartphons, condition, operatingSystem) {
  if (condition !== 'не выбрано') {
    const s = smartphons.filter(s => s.condition === condition)
    return searvhingOperatingSystem(s, operatingSystem)
  } else {
    const s = smartphons
    return searvhingOperatingSystem(s, operatingSystem)
  }
}

function searvhingOperatingSystem(smartphons, operatingSystem) {
  if (operatingSystem !== 'не выбрано') {
    const s = smartphons.filter(s => s.operatingSystem === operatingSystem)
    return s
  } else {
    const s = smartphons
    return s
  }
}

export const smartphonsSearch = (smartphons, { name, price1, price2, condition, operatingSystem}) => {
  if (price2) {
    const s = smartphons.filter(s => (price1 < s.price && s.price < price2))
    return searvhingName(s, name, condition, operatingSystem)
  } else {
    const s = smartphons.filter(s => price1 < s.price)
    return searvhingName(s, name, condition, operatingSystem)
  }

};

