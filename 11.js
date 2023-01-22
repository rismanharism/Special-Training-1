function getPoints(history) {
    let itemPoint = {
      'Moonlight': 120,
      'Goldqueen': 550,
      'Beras Parist': 1200,
      'Minyak Fatma': 2500
    }
    let totalPoint = 0;
    let belanjaanReport = {};
    history.forEach(item => {
      totalPoint += itemPoint[item];
      if (belanjaanReport[item]) {
        belanjaanReport[item]++;
      } else {
        belanjaanReport[item] = 1;
      }
    });
    return {totalPoint: totalPoint, belanjaanReport: belanjaanReport};
  }

  function getPrizes(point) {
    let prizeList = [
      {point: 2000, prize: ['Voucher 10k', 'Sticker', 'Penggaris']},
      {point: 5000, prize: ['Voucher 25k', 'Kinderboy', 'Tissue', 'Piring']},
      {point: 10000, prize: ['Payung', 'Panci']}
    ];
    let prizes = prizeList
      .filter(prize => point >= prize.point)
      .map(prize => prize.prize)
      .flat();
    let remainingPoint = point - prizeList
      .filter(prize => point >= prize.point)
      .map(prize => prize.point)
      .reduce((acc, curr) => acc + curr, 0);
    return {prizes: prizes, remainingPoint: remainingPoint};
  }

  function betamart(pembeli) {
    if (!pembeli) return "Tidak ada pembeli yang belanja";
  
    let point = getPoints(pembeli.histories);
    let prizes = getPrizes(point.totalPoint);
  
    return {
      name: pembeli.name,
      belanjaanReport: point.belanjaanReport,
      prizes: prizes
    };
  }

console.log(
    betamart({
        name: 'Ilham',
        histories: [
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
    betamart({
        name: 'Kosasih',
        histories: [
            'Moonlight',
            'Moonlight',
            'Goldqueen',
            'Moonlight',
            'Minyak Fatma',
            'Goldqueen',
            'Beras Parist',
            'Beras Parist',
            'Beras Parist',
            'Moonlight',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Moonlight',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja