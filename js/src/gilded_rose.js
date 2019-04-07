function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in -= 1;

      if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert')
        BackstagePass(i);
      else if (items[i].name === 'Aged Brie')
        IncreaseQuality(i, 1);
      else if (items[i].name.includes('Conjured'))
        DecreaseQuality(i, 2);
      else
        DecreaseQuality(i, 1);
    }
  }
}

function BackstagePass(index) {
  let sellIn = items[index].sell_in;

  if (sellIn < 0)
    items[index].quality = 0;
  else {
    let qualityIncrement = 1;

    if (sellIn <= 10 && sellIn > 5)
      qualityIncrement = 2;
    if (sellIn <= 5 && sellIn >= 0)
      qualityIncrement = 3;

    IncreaseQuality(index, qualityIncrement);
  }
}

function IncreaseQuality(index, qualityIncrement) {
  if (items[index].quality < 50) {
    // Would like to ask Leeroy if this is correct.  Leeroy implemented this originally, but
    // the specs do not say anything about quality INCREASING twice as fast for past sell_in
    if (items[index].sell_in < 0)
      qualityIncrement *= 2;

    if (items[index].quality + qualityIncrement > 50)
      items[index].quality = 50;
    else
      items[index].quality += qualityIncrement;
  }
}

function DecreaseQuality(index, qualityDecrement) {
  if (items[index].quality > 0) {
    if (items[index].sell_in < 0)
      qualityDecrement *= 2;

    if (items[index].quality - qualityDecrement < 0)
      items[index].quality = 0;
    else
      items[index].quality -= qualityDecrement;
  }
}
