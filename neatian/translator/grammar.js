var Foods = new GFGrammar(new GFAbstract("Phrase",{Boring: new Type([], "Quality"), Cheese: new Type([], "Kind"), Delicious: new Type([], "Quality"), Expensive: new Type([], "Quality"), Fish: new Type([], "Kind"), Fresh: new Type([], "Quality"), Is: new Type(["Item", "Quality"], "Phrase"), Italian: new Type([], "Quality"), Pizza: new Type([], "Kind"), QKind: new Type(["Quality", "Kind"], "Kind"), That: new Type(["Kind"], "Item"), These: new Type(["Kind"], "Item"), This: new Type(["Kind"], "Item"), Those: new Type(["Kind"], "Item"), Very: new Type(["Quality"], "Quality"), Warm: new Type([], "Quality"), Wine: new Type([], "Kind")}),{FoodsEng: new GFConcrete({},{0:[new Apply(19,[new PArg(2)]), new Apply(21,[new PArg(2)])], 1:[new Apply(20,[new PArg(2)]), new Apply(22,[new PArg(2)])], 2:[new Apply(9,[]), new Apply(12,[]), new Apply(17,[]), new Apply(18,[new PArg(4), new PArg(2)]), new Apply(25,[])], 3:[new Apply(14,[new PArg(0), new PArg(4)]), new Apply(15,[new PArg(1), new PArg(4)])], 4:[new Apply(8,[]), new Apply(10,[]), new Apply(11,[]), new Apply(13,[]), new Apply(16,[]), new Apply(23,[new PArg(4)]), new Apply(24,[])]},[new CncFun("'lindef Item'",[5]), new CncFun("'lindef Item'",[0]), new CncFun("'lindef Kind'",[5, 5]), new CncFun("'lindef Kind'",[0]), new CncFun("'lindef Phrase'",[5]), new CncFun("'lindef Phrase'",[0]), new CncFun("'lindef Quality'",[5]), new CncFun("'lindef Quality'",[0]), new CncFun("Boring",[7]), new CncFun("Cheese",[8, 9]), new CncFun("Delicious",[10]), new CncFun("Expensive",[11]), new CncFun("Fish",[12, 12]), new CncFun("Fresh",[13]), new CncFun("Is",[4]), new CncFun("Is",[3]), new CncFun("Italian",[6]), new CncFun("Pizza",[14, 15]), new CncFun("QKind",[1, 2]), new CncFun("That",[16]), new CncFun("These",[17]), new CncFun("This",[18]), new CncFun("Those",[19]), new CncFun("Very",[20]), new CncFun("Warm",[21]), new CncFun("Wine",[22, 23])],[[new SymCat(0, 0)],[new SymCat(0, 0), new SymCat(1, 0)],[new SymCat(0, 0), new SymCat(1, 1)],[new SymCat(0, 0), new SymKS("are"), new SymCat(1, 0)],[new SymCat(0, 0), new SymKS("is"), new SymCat(1, 0)],[new SymLit(0, 0)],[new SymKS("Italian")],[new SymKS("boring")],[new SymKS("cheese")],[new SymKS("cheeses")],[new SymKS("delicious")],[new SymKS("expensive")],[new SymKS("fish")],[new SymKS("fresh")],[new SymKS("pizza")],[new SymKS("pizzas")],[new SymKS("that"), new SymCat(0, 0)],[new SymKS("these"), new SymCat(0, 1)],[new SymKS("this"), new SymCat(0, 0)],[new SymKS("those"), new SymCat(0, 1)],[new SymKS("very"), new SymCat(0, 0)],[new SymKS("warm")],[new SymKS("wine")],[new SymKS("wines")]],{Float:{s: -3, e: -3}, Int:{s: -2, e: -2}, Item:{s: 0, e: 1}, Kind:{s: 2, e: 2}, Phrase:{s: 3, e: 3}, Quality:{s: 4, e: 4}, String:{s: -1, e: -1}}, 5), FoodsIta: new GFConcrete({},{0:[new Apply(22,[new PArg(4)]), new Apply(26,[new PArg(4)])], 1:[new Apply(23,[new PArg(5)]), new Apply(27,[new PArg(5)])], 2:[new Apply(24,[new PArg(4)]), new Apply(28,[new PArg(4)])], 3:[new Apply(25,[new PArg(5)]), new Apply(29,[new PArg(5)])], 4:[new Apply(9,[]), new Apply(12,[]), new Apply(20,[new PArg(7), new PArg(4)]), new Apply(32,[])], 5:[new Apply(19,[]), new Apply(21,[new PArg(7), new PArg(5)])], 6:[new Apply(14,[new PArg(0), new PArg(7)]), new Apply(15,[new PArg(1), new PArg(7)]), new Apply(16,[new PArg(2), new PArg(7)]), new Apply(17,[new PArg(3), new PArg(7)])], 7:[new Apply(8,[]), new Apply(10,[]), new Apply(11,[]), new Apply(13,[]), new Apply(18,[]), new Apply(30,[new PArg(7)]), new Apply(31,[])]},[new CncFun("'lindef Item'",[9]), new CncFun("'lindef Item'",[0]), new CncFun("'lindef Kind'",[9, 9]), new CncFun("'lindef Kind'",[0]), new CncFun("'lindef Phrase'",[9]), new CncFun("'lindef Phrase'",[0]), new CncFun("'lindef Quality'",[9, 9, 9, 9]), new CncFun("'lindef Quality'",[0]), new CncFun("Boring",[39, 38, 36, 37]), new CncFun("Cheese",[23, 22]), new CncFun("Delicious",[21, 20, 18, 19]), new CncFun("Expensive",[17, 16, 14, 15]), new CncFun("Fish",[40, 41]), new CncFun("Fresh",[27, 26, 24, 25]), new CncFun("Is",[3]), new CncFun("Is",[4]), new CncFun("Is",[1]), new CncFun("Is",[2]), new CncFun("Italian",[31, 30, 28, 29]), new CncFun("Pizza",[42, 43]), new CncFun("QKind",[5, 7]), new CncFun("QKind",[6, 8]), new CncFun("That",[45]), new CncFun("That",[46]), new CncFun("These",[50]), new CncFun("These",[49]), new CncFun("This",[51]), new CncFun("This",[48]), new CncFun("Those",[44]), new CncFun("Those",[47]), new CncFun("Very",[32, 33, 34, 35]), new CncFun("Warm",[13, 12, 10, 11]), new CncFun("Wine",[53, 52])],[[new SymCat(0, 0)],[new SymCat(0, 0), new SymKS("sono"), new SymCat(1, 1)],[new SymCat(0, 0), new SymKS("sono"), new SymCat(1, 3)],[new SymCat(0, 0), new SymKS("챔"), new SymCat(1, 0)],[new SymCat(0, 0), new SymKS("챔"), new SymCat(1, 2)],[new SymCat(1, 0), new SymCat(0, 0)],[new SymCat(1, 0), new SymCat(0, 2)],[new SymCat(1, 1), new SymCat(0, 1)],[new SymCat(1, 1), new SymCat(0, 3)],[new SymLit(0, 0)],[new SymKS("calda")],[new SymKS("calde")],[new SymKS("caldi")],[new SymKS("caldo")],[new SymKS("cara")],[new SymKS("care")],[new SymKS("cari")],[new SymKS("caro")],[new SymKS("deliziosa")],[new SymKS("deliziose")],[new SymKS("deliziosi")],[new SymKS("delizioso")],[new SymKS("formaggi")],[new SymKS("formaggio")],[new SymKS("fresca")],[new SymKS("fresche")],[new SymKS("freschi")],[new SymKS("fresco")],[new SymKS("italiana")],[new SymKS("italiane")],[new SymKS("italiani")],[new SymKS("italiano")],[new SymKS("molto"), new SymCat(0, 0)],[new SymKS("molto"), new SymCat(0, 1)],[new SymKS("molto"), new SymCat(0, 2)],[new SymKS("molto"), new SymCat(0, 3)],[new SymKS("noiosa")],[new SymKS("noiose")],[new SymKS("noiosi")],[new SymKS("noioso")],[new SymKS("pesce")],[new SymKS("pesci")],[new SymKS("pizza")],[new SymKS("pizze")],[new SymKS("quei"), new SymCat(0, 1)],[new SymKS("quel"), new SymCat(0, 0)],[new SymKS("quella"), new SymCat(0, 0)],[new SymKS("quelle"), new SymCat(0, 1)],[new SymKS("questa"), new SymCat(0, 0)],[new SymKS("queste"), new SymCat(0, 1)],[new SymKS("questi"), new SymCat(0, 1)],[new SymKS("questo"), new SymCat(0, 0)],[new SymKS("vini")],[new SymKS("vino")]],{Float:{s: -3, e: -3}, Int:{s: -2, e: -2}, Item:{s: 0, e: 3}, Kind:{s: 4, e: 5}, Phrase:{s: 6, e: 6}, Quality:{s: 7, e: 7}, String:{s: -1, e: -1}}, 8)});
