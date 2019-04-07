describe("Gilded Rose", function () {

  it('should not change sell by or quality as legendary Sulfuras item', function () {
    items = [new Item('Sulfuras, Hand of Ragnaros', 5, 120)];
    update_quality();
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(120);
  });

  it('should decrease quality by 1 for normal item', function () {
    items = [new Item('Elixir of the Mongoose', 1, 50)];
    update_quality();
    expect(items[0].name).toEqual('Elixir of the Mongoose');
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(49);
  });

  it('should decrease quality by 2 for normal item', function () {
    items = [new Item('+5 Dexterity Vest', 0, 50)];
    update_quality();
    expect(items[0].name).toEqual('+5 Dexterity Vest');
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(48);
  });

  it('should not decrease quality below 0 for normal item', function () {
    items = [new Item('Elixir of the Mongoose', 4, 0)];
    update_quality();
    expect(items[0].name).toEqual('Elixir of the Mongoose');
    expect(items[0].sell_in).toEqual(3);
    expect(items[0].quality).toEqual(0);
  });

  it('should increase quality by 1 for Aged Brie item', function () {
    items = [new Item('Aged Brie', 5, 14)];
    update_quality();
    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(15);
  });

  it('should increase quality by 2 for Aged Brie item', function () {
    items = [new Item('Aged Brie', -1, 14)];
    update_quality();
    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(16);
  });

  it('should not increase quality above 50 for Aged Brie item', function () {
    items = [new Item('Aged Brie', -1, 49)];
    update_quality();
    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(50);
  });

  it('should increase quality by 1 for Backstage pass', function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 12, 13)];
    update_quality();
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sell_in).toEqual(11);
    expect(items[0].quality).toEqual(14);
  });

  it('should increase quality by 2 for Backstage pass', function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 11, 13)];
    update_quality();
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sell_in).toEqual(10);
    expect(items[0].quality).toEqual(15);
  });

  it('should increase quality by 3 for Backstage pass', function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 13)];
    update_quality();
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(16);
  });

  it('should not increment quality above 50 for Backstage pass', function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)];
    update_quality();
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(50);
  });

  it('should set quality to 0 for Backstage pass', function () {
    items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 49)];
    update_quality();
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it('should decrease quality by 4 for Conjured item', function () {
    items = [new Item('Conjured Sparkling Water', 0, 49)];
    update_quality();
    expect(items[0].name).toEqual('Conjured Sparkling Water');
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(45);
  });

  it('should decrease quality by 2 for Conjured item', function () {
    items = [new Item('Conjured Mana Biscuit', 1, 49)];
    update_quality();
    expect(items[0].name).toEqual('Conjured Mana Biscuit');
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(47);
  });

  it('should decrease quality to 0 for Conjured item', function () {
    items = [new Item('Conjured Mana Strudel', 0, 3)];
    update_quality();
    expect(items[0].name).toEqual('Conjured Mana Strudel');
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });
});
