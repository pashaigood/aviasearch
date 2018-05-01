import StopQuantity, { Values }  from 'constants/StopQuantity'

export default function (value) {
  switch (value) {
    case StopQuantity[Values.ALL]: {
      return 'Все'
    }
    case StopQuantity[Values.DIRECT]: {
      return 'Без пересадок'
    }
    case StopQuantity[Values.ONE]: {
      return '1 пересадка'
    }
    default: {
      return `${value} пересадки`
    }
  }
}