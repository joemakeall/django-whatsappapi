document.addEventListener('DOMContentLoaded', function () {
    const products = [
        // Add a list of products here
        { codigo: '10100040261032', descricao: 'ÓCULOS DE SOL HB UNDERGROUND M BLACK/WOOD POLARIZED GRAY', grupo: '1000', ean: '7909306024990', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100040261032_1.jpg' },
        { codigo: '10104990732025', descricao: 'ÓCULOS DE SOL HB QUAD R 2.0 DARK GREEN SILVER', grupo: '1049', ean: '7909306040785', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104990732025_1.jpg' },
        { codigo: '10104080243001', descricao: 'ÓCULOS DE SOL HB FOSTER MATTE BLACK GRAY', grupo: '1040', ean: '7909306035903', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104080243001_1.jpg' },
        { codigo: '10104690243001', descricao: 'ÓCULOS DE SOL HB NUG MATTE BLACK GRAY', grupo: '1046', ean: '7909306040518', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104690243001_1.jpg' },
        { codigo: '10104930407024', descricao: 'ÓCULOS DE SOL HB QUAD X 2.0 PEARLED WHITE BLUE CHROME', grupo: '1049', ean: '7909306039970', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104930407024_1.jpg' },
        { codigo: '10104640243001', descricao: 'ÓCULOS DE SOL HB MANLY MATTE BLACK GRAY', grupo: '1046', ean: '7909306039093', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104640243001_1.jpg' },
        { codigo: '10100460261032', descricao: 'ÓCULOS DE SOL HB FLOYD M BLACK/WOOD POLARIZED GRAY', grupo: '1004', ean: '7909306024327', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100460261032_1.jpg' },
        { codigo: '10103860755025', descricao: 'ÓCULOS DE SOL HB GRINDER CRISTAL/GRAPHITE SILVER', grupo: '1038', ean: '7909306041881', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103860755025_1.jpg' },
        { codigo: '10104930243062', descricao: 'ÓCULOS DE SOL HB QUAD X 2.0 MATTE BLACK PHOTOCHROMIC', grupo: '1049', ean: '7909306039956', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104930243062_1.jpg' },
        { codigo: '10104690564004', descricao: 'ÓCULOS DE SOL HB NUG CLASSICAL HAVAN BROWN', grupo: '1046', ean: '7909306040525', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104690564004_1.jpg' },
        { codigo: '10104820243001', descricao: 'ÓCULOS DE SOL HB H-BOLD MATTE BLACK GRAY', grupo: '1048', ean: '7909306040365', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104820243001_1.jpg' },
        { codigo: '10104820031024', descricao: 'ÓCULOS DE SOL HB H-BOLD BLACK/M BLUE BLUE CHROME', grupo: '1048', ean: '7909306041768', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104820031024_1.jpg' },
        { codigo: '10105000092024', descricao: 'ÓCULOS DE SOL HB QUAD Z 2.0 CRANBERRY BLUE CHROME', grupo: '1050', ean: '7909306041089', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105000092024_1.jpg' },
        { codigo: '10104080243032', descricao: 'ÓCULOS DE SOL HB FOSTER MATTE BLACK POLARIZED GRAY', grupo: '1040', ean: '7909306040655', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104080243032_1.jpg' },
        { codigo: '10104740243001', descricao: 'ÓCULOS DE SOL HB LEAD MATTE BLACK GRAY', grupo: '1047', ean: '7909306041157', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104740243001_1.jpg' },
        { codigo: '10104550243032', descricao: 'ÓCULOS DE SOL HB KIRRA MATTE BLACK POLARIZED GRAY', grupo: '1045', ean: '7909306039833', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104550243032_1.jpg' },
        { codigo: '10104210752028', descricao: 'ÓCULOS DE SOL HB EDGE M METALLIC GREEN GREEN CHROME', grupo: '1042', ean: '7909306041850', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104210752028_1.jpg' },
        { codigo: '10104930243027', descricao: 'ÓCULOS DE SOL HB QUAD X 2.0 MATTE BLACK RED CHROME', grupo: '1049', ean: '7909306039949', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104930243027_1.jpg' },
        { codigo: '10104080214004', descricao: 'ÓCULOS DE SOL HB FOSTER HAVANA TURTLE BROWN', grupo: '1040', ean: '7909306040662', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104080214004_1.jpg' },
        { codigo: '10104690686006', descricao: 'ÓCULOS DE SOL HB NUG LIGHT BROW/MATTE HAVA TURTLE G15', grupo: '1046', ean: '7909306040532', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104690686006_1.jpg' },
        { codigo: '10105000407054', descricao: 'ÓCULOS DE SOL HB QUAD Z 2.0 PEARLED WHITE AMBER', grupo: '1050', ean: '7909306041072', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105000407054_1.jpg' },
        { codigo: '10100250243001', descricao: 'ÓCULOS DE SOL HB OZZIE TEEN MATTE BLACK GRAY', grupo: '1002', ean: '7909306013727', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100250243001_1.jpg' },
        { codigo: '10104990302054', descricao: 'ÓCULOS DE SOL HB QUAD R 2.0 MATTE GRAPHITE AMBER', grupo: '1049', ean: '7909306040792', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104990302054_1.jpg' },
        { codigo: '10104160758001', descricao: 'ÓCULOS DE SOL HB SHIELD COMP 2.0 MATTE GRA PURP TURQ 2 GRAY', grupo: '1041', ean: '7909306042017', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104160758001_1.jpg' },
        { codigo: '10104280754024', descricao: 'ÓCULOS DE SOL HB EDGE R BLUE GRAD PINK BLUE CHROME', grupo: '1042', ean: '7909306041874', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104280754024_1.jpg' },
        { codigo: '10104740279027', descricao: 'ÓCULOS DE SOL HB LEAD MATTE BLACK/RED RED CHROME', grupo: '1047', ean: '7909306041560', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104740279027_1.jpg' },
        { codigo: '10105000243001', descricao: 'ÓCULOS DE SOL HB QUAD Z 2.0 MATTE BLACK GRAY', grupo: '1050', ean: '7909306041058', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105000243001_1.jpg' },
        { codigo: '10104120757024', descricao: 'ÓCULOS DE SOL HB SHIELD EVO 2.0 M BLACK METALLIC BLUE BLUE CHROME', grupo: '1041', ean: '7909306041935', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104120757024_1.jpg' },
        { codigo: '10104080031024', descricao: 'ÓCULOS DE SOL HB FOSTER BLACK/M BLUE BLUE CHROME', grupo: '1040', ean: '7909306041775', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104080031024_1.jpg' },
        { codigo: '10104640564006', descricao: 'ÓCULOS DE SOL HB MANLY CLASSICAL HAVAN G15', grupo: '1046', ean: '7909306039413', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104640564006_1.jpg' },
        { codigo: '10104310751001', descricao: 'ÓCULOS DE SOL HB APEX COLORFULL 2 GRAY', grupo: '1043', ean: '7909306041843', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104310751001_1.jpg' },
        { codigo: '10100260261032', descricao: 'ÓCULOS DE SOL HB OZZIE M BLACK/WOOD POLARIZED GRAY', grupo: '1002', ean: '7909306024730', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100260261032_1.jpg' },
        { codigo: '10103210261032', descricao: 'ÓCULOS DE SOL HB H-BOMB 2.0 M BLACK/WOOD POLARIZED GRAY', grupo: '1032', ean: '7909306042093', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103210261032_1.jpg' },
        { codigo: '10100440261032', descricao: 'ÓCULOS DE SOL HB FREAK M BLACK/WOOD POLARIZED GRAY', grupo: '1004', ean: '7909306024341', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100440261032_1.jpg' },
        { codigo: '10100250031001', descricao: 'ÓCULOS DE SOL HB OZZIE TEEN BLACK/M BLUE GRAY', grupo: '1002', ean: '7909306041492', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100250031001_1.jpg' },
        { codigo: '10104690149001', descricao: 'ÓCULOS DE SOL HB NUG GLOSS BLACK GRAY', grupo: '1046', ean: '7909306040501', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104690149001_1.jpg' },
        { codigo: '10104820698032', descricao: 'ÓCULOS DE SOL HB H-BOLD M BLA/DARK WOOD POLARIZED GRAY', grupo: '1048', ean: '7909306042130', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104820698032_1.jpg' },
        { codigo: '10104050261032', descricao: 'ÓCULOS DE SOL HB WOULD 2.0 M BLACK/WOOD POLARIZED GRAY', grupo: '1040', ean: '7909306042109', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104050261032_1.jpg' },
        { codigo: '10104930243001', descricao: 'ÓCULOS DE SOL HB QUAD X 2.0 MATTE BLACK GRAY', grupo: '1049', ean: '7909306039932', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104930243001_1.jpg' },
        { codigo: '10104990243062', descricao: 'ÓCULOS DE SOL HB QUAD R 2.0 MATTE BLACK PHOTOCHROMIC', grupo: '1049', ean: '7909306040808', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104990243062_1.jpg' },
        { codigo: '10104970564006', descricao: 'ÓCULOS DE SOL HB THE RIGHT CLASSICAL HAVAN G15', grupo: '1049', ean: '7909306041027', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104970564006_1.jpg' },
        { codigo: '10100250279001', descricao: 'ÓCULOS DE SOL HB OZZIE TEEN MATTE BLACK/RED GRAY', grupo: '1002', ean: '7909306041515', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100250279001_1.jpg' },
        { codigo: '10101240312010', descricao: 'OC HB POLYTECH 93023 MATTE NAVY DEMO', grupo: '1012', ean: '7909306028103', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10101240312010_1.jpg' },
        { codigo: '10104970243032', descricao: 'ÓCULOS DE SOL HB THE RIGHT MATTE BLACK POLARIZED GRAY', grupo: '1049', ean: '7909306041034', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104970243032_1.jpg' },
        { codigo: '10104820698001', descricao: 'ÓCULOS DE SOL HB H-BOLD M BLA/DARK WOOD GRAY', grupo: '1048', ean: '7909306041751', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104820698001_1.jpg' },
        { codigo: '10103860729001', descricao: 'ÓCULOS DE SOL HB GRINDER COPPER GRAY', grupo: '1038', ean: '7909306041898', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103860729001_1.jpg' },
        { codigo: '10104640149001', descricao: 'ÓCULOS DE SOL HB MANLY GLOSS BLACK GRAY', grupo: '1046', ean: '7909306039406', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104640149001_1.jpg' },
        { codigo: '10100250486001', descricao: 'ÓCULOS DE SOL HB OZZIE TEEN M. F BLACK/BLUE GRAY', grupo: '1002', ean: '7909306041508', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100250486001_1.jpg' },
        { codigo: '10104820243032', descricao: 'ÓCULOS DE SOL HB H-BOLD MATTE BLACK POLARIZED GRAY', grupo: '1048', ean: '7909306040587', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104820243032_1.jpg' },
        { codigo: '10105160149010', descricao: 'OC HB POLYTECH 0516 GLOSS BLACK DEMO', grupo: '1051', ean: '7909306043366', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105160149010_1.jpg' },
        { codigo: '10104570701010', descricao: 'OC HB POLYTECH 3 0457 M SHADOW GRAY DEMO', grupo: '1045', ean: '7909306039994', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104570701010_1.jpg' },
        { codigo: '10104720722091', descricao: 'OC HB SWITCH 3 0472 M NAVAL BLUE GRAY/SILVER', grupo: '1047', ean: '7909306041607', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720722091_1.jpg' },
        { codigo: '10104510164010', descricao: 'OC HB DUCTENIUM 0451 GOLD DEMO', grupo: '1045', ean: '7909306037532', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104510164010_1.jpg' },
        { codigo: '10104840206010', descricao: 'OC HB POLYTECH 0484 GREEN SHADES DEMO', grupo: '1048', ean: '7909306039673', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104840206010_1.jpg' },
        { codigo: '10104620304010', descricao: 'OC HB DUOTECH 2 0462 M GRAPHI/M NAVY DEMO', grupo: '1046', ean: '7909306041102', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104620304010_1.jpg' },
        { codigo: '10104500164010', descricao: 'OC HB DUCTENIUM 0450 GOLD DEMO', grupo: '1045', ean: '7909306037501', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104500164010_1.jpg' },
        { codigo: '10100880805010', descricao: 'OC HB POLYTECH 93136 M GRAPHITE/MOSS GREEN DEMO', grupo: '1008', ean: '7909306043694', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100880805010_1.jpg' },
        { codigo: '10105150407001', descricao: 'OC HB A NEW SPECIES PEARLED WHITE GRAY', grupo: '1051', ean: '7909306042970', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105150407001_1.jpg' },
        { codigo: '10104240243001', descricao: 'OC HB PEAK MATTE BLACK GRAY', grupo: '1042', ean: '7909306036252', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104240243001_1.jpg' },
        { codigo: '10104560734092', descricao: 'OC HB SWITCH 2 0456 L ROYAL/ YELLOW GRAY/GAMER', grupo: '1045', ean: '7909306042192', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560734092_1.jpg' },
        { codigo: '10105090243010', descricao: 'OC HB POLYTECH 2 0509 MATTE BLACK DEMO', grupo: '1050', ean: '7909306042369', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105090243010_1.jpg' },
        { codigo: '10104620505010', descricao: 'OC HB DUOTECH 2 0462 M GRAPH/M BLACK DEMO', grupo: '1046', ean: '7909306041096', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104620505010_1.jpg' },
        { codigo: '10104500473010', descricao: 'OC HB DUCTENIUM 0450 GRAPHITE DEMO', grupo: '1045', ean: '7909306037488', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104500473010_1.jpg' },
        { codigo: '10104510473010', descricao: 'OC HB DUCTENIUM 0451 GRAPHITE DEMO', grupo: '1045', ean: '7909306037525', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104510473010_1.jpg' },
        { codigo: '10105090784010', descricao: 'OC HB POLYTECH 2 0509 MATTE CAFE/ M LIGTH GREEN DEMO', grupo: '1050', ean: '7909306042871', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105090784010_1.jpg' },
        { codigo: '10104800771010', descricao: 'OC HB POLYTECH 3 0480 M BLACK LIGHT GREEN DEMO', grupo: '1048', ean: '7909306042628', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104800771010_1.jpg' },
        { codigo: '10105050254028', descricao: 'OC HB AMPED M BLACK ON BLUE POLARIZED GREEN', grupo: '1050', ean: '7909306042437', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105050254028_1.jpg' },
        { codigo: '10104590003010', descricao: 'OC HB POLYTECH 2 0459 M BLACK D BLUE DEMO', grupo: '1045', ean: '7909306040624', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104590003010_1.jpg' },
        { codigo: '10104560031099', descricao: 'OC HB SWITCH 2 0456 BLACK/M BLUE POLARIZED BLUE/GAMER', grupo: '1045', ean: '7909306042178', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560031099_1.jpg' },
        { codigo: '10105060284001', descricao: 'OC HB PADANG MATTE BROWN GRAY', grupo: '1050', ean: '7909306042475', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105060284001_1.jpg' },
        { codigo: '10104720261032', descricao: 'OC HB SWITCH 3 0472 M BLACK/WOOD POLARIZED GRAY', grupo: '1047', ean: '7909306040693', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720261032_1.jpg' },
        { codigo: '10104910750010', descricao: 'OC HB POLYTECH 3 0491 M BLACK/ M RED DEMO', grupo: '1049', ean: '7909306041744', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104910750010_1.jpg' },
        { codigo: '10104650243001', descricao: 'OC HB BRAT XL  MATTE BLACK GRAY', grupo: '1046', ean: '7909306038607', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104650243001_1.jpg' },
        { codigo: '10104900578010', descricao: 'OC HB POLYTECH 3 0490 PRINT CARBON FI DEMO', grupo: '1049', ean: '7909306043762', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104900578010_1.jpg' },
        { codigo: '10104560734032', descricao: 'OC HB SWITCH 2 0456 L ROYAL/ YELLOW POLARIZED GRAY', grupo: '1045', ean: '7909306040853', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560734032_1.jpg' },
        { codigo: '10104720243074', descricao: 'OC HB SWITCH 3 0472 MATTE BLACK GRAY/MULTI BLUE', grupo: '1047', ean: '7909306040716', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720243074_1.jpg' },
        { codigo: '10105070767004', descricao: 'OC HB CYCLOPS M BLAC/BROWN TURTLE BROWN', grupo: '1050', ean: '7909306042505', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105070767004_1.jpg' },
        { codigo: '10104570724010', descricao: 'OC HB POLYTECH 3 0457 M BLACK/ L GREEN DEMO', grupo: '1045', ean: '7909306040013', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104570724010_1.jpg' },
        { codigo: '10103390807104', descricao: 'OC HB SWITCH 0339 M MILITARY GREE P SOLID GREEN G15/GRAY', grupo: '1033', ean: '7909306043823', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103390807104_1.jpg' },
        { codigo: '10105100149010', descricao: 'OC HB POLYTECH 0510 GLOSS BLACK DEMO', grupo: '1051', ean: '7909306043342', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105100149010_1.jpg' },
        { codigo: '10105060791004', descricao: 'OC HB PADANG BROWN TURTLE BROWN', grupo: '1050', ean: '7909306043052', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105060791004_1.jpg' },
        { codigo: '10105160796010', descricao: 'OC HB POLYTECH 0516 FADE TURTLE RED DEMO', grupo: '1051', ean: '7909306043441', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105160796010_1.jpg' },
        { codigo: '10104720243073', descricao: 'OC HB SWITCH 3 0472 MATTE BLACK GRAY/NIGHT DRIV', grupo: '1047', ean: '7909306040686', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720243073_1.jpg' },
        { codigo: '10105080781010', descricao: 'OC HB POLYTECH 2 0508 MATTE HAVANA TO ONYX DEMO', grupo: '1050', ean: '7909306042802', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105080781010_1.jpg' },
        { codigo: '10104590699010', descricao: 'OC HB POLYTECH 2 0459 M NIGHT BLUE DEMO', grupo: '1045', ean: '7909306040631', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104590699010_1.jpg' },
        { codigo: '10105090335010', descricao: 'OC HB POLYTECH 2 0509 MATTE ONYX DEMO', grupo: '1050', ean: '7909306042833', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105090335010_1.jpg' },
        { codigo: '10105160115010', descricao: 'OC HB POLYTECH 0516 FADE NEO BROWN DEMO', grupo: '1051', ean: '7909306043373', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105160115010_1.jpg' },
        { codigo: '10102790808010', descricao: 'OC HB POLYTECH 0279 M CLEAR OLIVE DEMO', grupo: '1027', ean: '7909306043724', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10102790808010_1.jpg' },
        { codigo: '10103390243092', descricao: 'OC HB SWITCH 0339 MATTE BLACK GRAY/GAMER', grupo: '1033', ean: '7909306043410', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103390243092_1.jpg' },
        { codigo: '10104720578032', descricao: 'OC HB SWITCH 3 0472 PRINT CARBON FI POLARIZED GRAY', grupo: '1047', ean: '7909306040709', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720578032_1.jpg' },
        { codigo: '10105150788001', descricao: 'OC HB A NEW SPECIES ALUMINIUM GRAY', grupo: '1051', ean: '7909306042987', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105150788001_1.jpg' },
        { codigo: '10104900698010', descricao: 'OC HB POLYTECH 3 0490 M BLA/DARK WOOD DEMO', grupo: '1049', ean: '7909306041706', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104900698010_1.jpg' },
        { codigo: '10105080243010', descricao: 'OC HB POLYTECH 2 0508 MATTE BLACK DEMO', grupo: '1050', ean: '7909306042352', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105080243010_1.jpg' },
        { codigo: '10105150789001', descricao: 'OC HB A NEW SPECIES METALLIC BLUE GRAY', grupo: '1051', ean: '7909306043007', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105150789001_1.jpg' },
        { codigo: '10102550312010', descricao: 'OC HB POLYTECH 0255 MATTE NAVY DEMO', grupo: '1025', ean: '7909306028233', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10102550312010_1.jpg' },
        { codigo: '10100570810010', descricao: 'OC HB DUOTECH 93424 MATTE GRAPHITE/ M NIGHT BLUE DEMO', grupo: '1005', ean: '7909306043809', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100570810010_1.jpg' },
        { codigo: '10104810312032', descricao: 'OC HB SWITCH 2 0481 TEEN MATTE NAVY POLARIZED GRAY', grupo: '1048', ean: '7909306040945', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810312032_1.jpg' },
        { codigo: '10104720243032', descricao: 'OC HB SWITCH 3 0472 MATTE BLACK POLARIZED GRAY', grupo: '1047', ean: '7909306039802', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720243032_1.jpg' },
        { codigo: '10104570698010', descricao: 'OC HB POLYTECH 3 0457 M BLA/DARK WOOD DEMO', grupo: '1045', ean: '7909306042055', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104570698010_1.jpg' },
        { codigo: '10104510477010', descricao: 'OC HB DUCTENIUM 0451 BLACK DEMO', grupo: '1045', ean: '7909306037518', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104510477010_1.jpg' },
        { codigo: '10105080774010', descricao: 'OC HB POLYTECH 2 0508 MATTE LIGHT GREEN DEMO', grupo: '1050', ean: '7909306042819', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105080774010_1.jpg' },
        { codigo: '10104810295098', descricao: 'OC HB SWITCH 2 0481 TEEN M FIRE/M BLACK POLARIZED RED/GAMER', grupo: '1048', ean: '7909306042147', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810295098_1.jpg' },
        { codigo: '10104560243032', descricao: 'OC HB SWITCH 2 0456 MATTE BLACK POLARIZED GRAY', grupo: '1045', ean: '7909306040815', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560243032_1.jpg' },
        { codigo: '10104100243010', descricao: 'OC HB POLYTECH 0410 MATTE BLACK DEMO', grupo: '1041', ean: '7909306035095', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104100243010_1.jpg' },
        { codigo: '10105160795010', descricao: 'OC HB POLYTECH 0516 ROSE ZEBRA DEMO', grupo: '1051', ean: '7909306043397', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105160795010_1.jpg' },
        { codigo: '10104560733092', descricao: 'OC HB SWITCH 2 0456 M GRAPH/ FIRE GRAY/GAMER', grupo: '1045', ean: '7909306042185', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560733092_1.jpg' },
        { codigo: '10104810735032', descricao: 'OC HB SWITCH 2 0481 TEEN M GRAP/ M S GREEN POLARIZED GRAY', grupo: '1048', ean: '7909306040952', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810735032_1.jpg' },
        { codigo: '10105060243001', descricao: 'OC HB PADANG MATTE BLACK GRAY', grupo: '1050', ean: '7909306042383', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105060243001_1.jpg' },
        { codigo: '10104590302010', descricao: 'OC HB POLYTECH 2 0459 MATTE GRAPHITE DEMO', grupo: '1045', ean: '7909306040617', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104590302010_1.jpg' },
        { codigo: '10104810735092', descricao: 'OC HB SWITCH 2 0481 TEEN M GRAP/M S GREEN GRAY/GAMER', grupo: '1048', ean: '7909306042161', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810735092_1.jpg' },
        { codigo: '10105050243001', descricao: 'OC HB AMPED MATTE BLACK GRAY', grupo: '1050', ean: '7909306042376', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105050243001_1.jpg' },
        { codigo: '10104900243010', descricao: 'OC HB POLYTECH 3 0490 MATTE BLACK DEMO', grupo: '1049', ean: '7909306041164', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104900243010_1.jpg' },
        { codigo: '10104810295044', descricao: 'OC HB SWITCH 2 0481 TEEN M FIRE/M BLACK POLARIZED RED', grupo: '1048', ean: '7909306041126', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810295044_1.jpg' },
        { codigo: '10104810243032', descricao: 'OC HB SWITCH 2 0481 TEEN MATTE BLACK POLARIZED GRAY', grupo: '1048', ean: '7909306040914', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810243032_1.jpg' },
        { codigo: '10104620737010', descricao: 'OC HB DUOTECH 2 0462 M GRAPH/ WOOD DEMO', grupo: '1046', ean: '7909306041119', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104620737010_1.jpg' },
        { codigo: '10105070635001', descricao: 'OC HB CYCLOPS GRAP/MATTE NAVAL BLUE GRAY', grupo: '1050', ean: '7909306042512', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105070635001_1.jpg' },
        { codigo: '10104650302001', descricao: 'OC HB BRAT XL MATTE GRAPHITE GRAY', grupo: '1046', ean: '7909306038614', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104650302001_1.jpg' },
        { codigo: '10105100356010', descricao: 'OC HB POLYTECH 0510 M ULTRAMARINE DEMO', grupo: '1051', ean: '7909306043779', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105100356010_1.jpg' },
        { codigo: '10104800312010', descricao: 'OC HB POLYTECH 3 0480 MATTE NAVY DEMO', grupo: '1048', ean: '7909306042635', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104800312010_1.jpg' },
        { codigo: '10105160545010', descricao: 'OC HB POLYTECH 0516 CHOCOLATE MINT DEMO', grupo: '1051', ean: '7909306043458', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105160545010_1.jpg' },
        { codigo: '10105090782010', descricao: 'OC HB POLYTECH 2 0509 MATTE NAVY/ M SMOKE DEMO', grupo: '1050', ean: '7909306042840', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105090782010_1.jpg' },
        { codigo: '10105060605003', descricao: 'OC HB PADANG MATTE P. WHITE BRONZE', grupo: '1050', ean: '7909306042864', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105060605003_1.jpg' },
        { codigo: '10104720243092', descricao: 'OC HB SWITCH 3 0472 MATTE BLACK GRAY/GAMER', grupo: '1047', ean: '7909306043427', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720243092_1.jpg' },
        { codigo: '10104720803073', descricao: 'OC HB SWITCH 3 0472 M CLEAR COFFEE GRAY/NIGHT DRIV', grupo: '1047', ean: '7909306043663', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104720803073_1.jpg' },
        { codigo: '10104810312092', descricao: 'OC HB SWITCH 2 0481 TEEN MATTE NAVY GRAY/GAMER', grupo: '1048', ean: '7909306042154', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810312092_1.jpg' },
        { codigo: '10104900699010', descricao: 'OC HB POLYTECH 3 0490 M NIGHT BLUE DEMO', grupo: '1049', ean: '7909306041690', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104900699010_1.jpg' },
        { codigo: '10105050311006', descricao: 'OC HB AMPED M HAVANA TURTLE G15', grupo: '1050', ean: '7909306042413', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105050311006_1.jpg' },
        { codigo: '10104910243010', descricao: 'OC HB POLYTECH 3 0491 MATTE BLACK DEMO', grupo: '1049', ean: '7909306041171', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104910243010_1.jpg' },
        { codigo: '10104910749010', descricao: 'OC HB POLYTECH 3 0491 M ULTRAMAR/ONYX DEMO', grupo: '1049', ean: '7909306041737', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104910749010_1.jpg' },
        { codigo: '10104570243010', descricao: 'OC HB POLYTECH 3 0457 MATTE BLACK DEMO', grupo: '1045', ean: '7909306039796', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104570243010_1.jpg' },
        { codigo: '10101080578010', descricao: 'OC HB POLYTECH 93108 PRINT CARBON FI DEMO', grupo: '1010', ean: '7909306043717', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10101080578010_1.jpg' },
        { codigo: '10101080804010', descricao: 'OC HB POLYTECH 93108 M GREENISH GRAY/BLACK DEMO', grupo: '1010', ean: '7909306043700', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10101080804010_1.jpg' },
        { codigo: '10104910737010', descricao: 'OC HB POLYTECH 3 0491 M GRAPH/ WOOD DEMO', grupo: '1049', ean: '7909306041720', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104910737010_1.jpg' },
        { codigo: '10104800243010', descricao: 'OC HB POLYTECH 3 0480 MATTE BLACK DEMO', grupo: '1048', ean: '7909306042314', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104800243010_1.jpg' },
        { codigo: '10104240302001', descricao: 'OC HB PEAK MATTE GRAPHITE GRAY', grupo: '1042', ean: '7909306036269', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104240302001_1.jpg' },
        { codigo: '10104500477010', descricao: 'OC HB DUCTENIUM 0450 BLACK DEMO', grupo: '1045', ean: '7909306037495', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104500477010_1.jpg' },
        { codigo: '10104810243092', descricao: 'OC HB SWITCH 2 0481 TEEN MATTE BLACK GRAY/GAMER', grupo: '1048', ean: '7909306040938', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104810243092_1.jpg' },
        { codigo: '10105070766006', descricao: 'OC HB CYCLOPS M GRAP/M SHADOW GRAY G15', grupo: '1050', ean: '7909306042499', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105070766006_1.jpg' },
        { codigo: '10105170769004', descricao: 'OC HB BONDI M BLACK TO HAVANA BROWN', grupo: '1051', ean: '7909306042567', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105170769004_1.jpg' },
        { codigo: '10104560031033', descricao: 'OC HB SWITCH 2 0456 BLACK/M BLUE POLARIZED BLUE', grupo: '1045', ean: '7909306041782', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560031033_1.jpg' },
        { codigo: '10105070505001', descricao: 'OC HB CYCLOPS M GRAPH/M BLACK GRAY', grupo: '1050', ean: '7909306042390', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105070505001_1.jpg' },
        { codigo: '10105170723006', descricao: 'OC HB BONDI MATTE LIGHT BROW/MATTE HAVA TURTLE G15', grupo: '1051', ean: '7909306043069', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105170723006_1.jpg' },
        { codigo: '10104560733032', descricao: 'OC HB SWITCH 2 0456 M GRAPH/ FIRE POLARIZED GRAY', grupo: '1045', ean: '7909306040839', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560733032_1.jpg' },
        { codigo: '10105080438010', descricao: 'OC HB POLYTECH 2 0508 M STEEL BLUE DEMO', grupo: '1050', ean: '7909306042796', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105080438010_1.jpg' },
        { codigo: '10105050284004', descricao: 'OC HB AMPED MATTE BROWN BROWN', grupo: '1050', ean: '7909306042420', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105050284004_1.jpg' },
        { codigo: '10104590243010', descricao: 'OC HB POLYTECH 2 0459 MATTE BLACK DEMO', grupo: '1045', ean: '7909306040372', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104590243010_1.jpg' },
        { codigo: '10104570699010', descricao: 'OC HB POLYTECH 3 0457 M NIGHT BLUE DEMO', grupo: '1045', ean: '7909306043816', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104570699010_1.jpg' },
        { codigo: '10105100335010', descricao: 'OC HB POLYTECH 0510 MATTE ONYX DEMO', grupo: '1051', ean: '7909306043359', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105100335010_1.jpg' },
        { codigo: '10100410261032', descricao: 'ÓCULOS DE SOL HB H-BOMB M BLACK/WOOD POLARIZED GRAY', grupo: '1004', ean: '7909306024549', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100410261032_1.jpg' },
        { codigo: '10104740214004', descricao: 'ÓCULOS DE SOL HB LEAD HAVANA TURTLE BROWN', grupo: '1047', ean: '7909306041539', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104740214004_1.jpg' },
        { codigo: '10103680729094', descricao: 'ÓCULOS DE SOL HB SPIN COPPER GRAY,AMBER', grupo: '1036', ean: '7909306041942', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103680729094_1.jpg' },
        { codigo: '10100280261032', descricao: 'ÓCULOS DE SOL HB OVERKILL M BLACK/WOOD POLARIZED GRAY', grupo: '1002', ean: '7909306024686', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100280261032_1.jpg' },
        { codigo: '10104990243001', descricao: 'ÓCULOS DE SOL HB QUAD R 2.0 MATTE BLACK GRAY', grupo: '1049', ean: '7909306040778', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104990243001_1.jpg' },
        { codigo: '10104930302025', descricao: 'ÓCULOS DE SOL HB QUAD X 2.0 MATTE GRAPHITE SILVER', grupo: '1049', ean: '7909306039963', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104930302025_1.jpg' },
        { codigo: '10104740745025', descricao: 'ÓCULOS DE SOL HB LEAD M BLACK/WHITE SILVER', grupo: '1047', ean: '7909306041546', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104740745025_1.jpg' },
        { codigo: '10104080724006', descricao: 'ÓCULOS DE SOL HB FOSTER M BLACK/ L GREEN G15', grupo: '1040', ean: '7909306040679', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104080724006_1.jpg' },
        { codigo: '10104210753024', descricao: 'ÓCULOS DE SOL HB EDGE M BLACK/ CYAN BLUE CHROME', grupo: '1042', ean: '7909306041867', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104210753024_1.jpg' },
        { codigo: '10103860756001', descricao: 'ÓCULOS DE SOL HB GRINDER MATTE GRAD PURP TURQ GRAY', grupo: '1038', ean: '7909306041904', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103860756001_1.jpg' },
        { codigo: '10105000243062', descricao: 'ÓCULOS DE SOL HB QUAD Z 2.0 MATTE BLACK PHOTOCHROMIC', grupo: '1050', ean: '7909306041065', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105000243062_1.jpg' },
        { codigo: '10104740243032', descricao: 'ÓCULOS DE SOL HB LEAD MATTE BLACK POLARIZED GRAY', grupo: '1047', ean: '7909306041553', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104740243032_1.jpg' },
        { codigo: '10104730261032', descricao: 'ÓCULOS DE SOL HB BUZZ M BLACK/WOOD POLARIZED GRAY', grupo: '1047', ean: '7909306042123', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104730261032_1.jpg' },
        { codigo: '10104120761027', descricao: 'ÓCULOS DE SOL HB SHIELD EVO 2.0 M P WHITE/ M GRAPHITE RED CHROME', grupo: '1041', ean: '7909306042246', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104120761027_1.jpg' },
        { codigo: '10104240164006', descricao: 'OC HB PEAK GOLD G15', grupo: '1042', ean: '7909306036245', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104240164006_1.jpg' },
        { codigo: '10104910807010', descricao: 'OC HB POLYTECH 3 0491 MATTE MILITARY GREEN DEMO', grupo: '1049', ean: '7909306045186', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104910807010_1.jpg' },
        { codigo: '10104650164006', descricao: 'OC HB BRAT XL GOLD G15', grupo: '1046', ean: '7909306038621', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104650164006_1.jpg' },
        { codigo: '10104560243092', descricao: 'OC HB SWITCH 2 0456 MATTE BLACK GRAY/GAMER', grupo: '1045', ean: '7909306040846', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104560243092_1.jpg' },
        { codigo: '10104900748010', descricao: 'OC HB POLYTECH 3 0490 M GRA/LAND GREEN DEMO', grupo: '1049', ean: '7909306041713', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104900748010_1.jpg' },
        { codigo: '10105100243010', descricao: 'OC HB POLYTECH 0510 MATTE BLACK DEMO', grupo: '1051', ean: '7909306043328', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105100243010_1.jpg' },
        { codigo: '10104800772010', descricao: 'OC HB POLYTECH 3 0480 MATTE GRAY ON ORANGE DEMO', grupo: '1048', ean: '7909306042642', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104800772010_1.jpg' },
        { codigo: '10105150243001', descricao: 'OC HB A NEW SPECIES MATTE BLACK GRAY', grupo: '1051', ean: '7909306042963', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105150243001_1.jpg' },
        { codigo: '10105170243001', descricao: 'OC HB BONDI MATTE BLACK GRAY', grupo: '1051', ean: '7909306042406', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105170243001_1.jpg' },
        { codigo: '10105170768001', descricao: 'OC HB BONDI MATTE NIGHT BLUE TO BLUE HAVANA GRAY', grupo: '1051', ean: '7909306042536', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10105170768001_1.jpg' },
        { codigo: '10100780243001', descricao: 'OC HB 93147 MATTE BLACK GRAY', grupo: '1007', ean: '7909306041485', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100780243001_1.jpg' },
        { codigo: '10104060243032', descricao: 'ÓCULOS DE SOL HB T-DROP MATTE BLACK POLARIZED GRAY', grupo: '1040', ean: '7909306042024', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104060243032_1.jpg' },
        { codigo: '10104970243001', descricao: 'ÓCULOS DE SOL HB THE RIGHT MATTE BLACK GRAY', grupo: '1049', ean: '7909306041010', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104970243001_1.jpg' },
        { codigo: '10104970736024', descricao: 'ÓCULOS DE SOL HB THE RIGHT M ONYX N BLUE BLUE CHROME', grupo: '1049', ean: '7909306041041', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104970736024_1.jpg' },
        { codigo: '10104050261001', descricao: 'ÓCULOS DE SOL HB WOULD 2.0 M BLACK/WOOD GRAY', grupo: '1040', ean: '7909306036160', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10104050261001_1.jpg' },
        { codigo: '10102550243010', descricao: 'OC HB POLYTECH 0255 MATTE BLACK DEMO', grupo: '1025', ean: '7909306028219', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10102550243010_1.jpg' },
        { codigo: '10102790312010', descricao: 'OC HB POLYTECH 0279 MATTE NAVY DEMO', grupo: '1027', ean: '7909306032360', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10102790312010_1.jpg' },
        { codigo: '10102790377010', descricao: 'OC HB POLYTECH 0279 NEW GRAPHITE DEMO', grupo: '1027', ean: '7909306032377', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10102790377010_1.jpg' },
        { codigo: '10100410243032', descricao: 'ÓCULOS DE SOL HB H-BOMB MATTE BLACK POLARIZED GRAY', grupo: '1004', ean: '7909306017800', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100410243032_1.jpg' },
        { codigo: '10103200284004', descricao: 'ÓCULOS DE SOL HB NARRABEEN MATTE BROWN BROWN', grupo: '1032', ean: '7909306031646', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103200284004_1.jpg' },
        { codigo: '10103680243067', descricao: 'ÓCULOS DE SOL HB SPIN MATTE BLACK GRAY, CRISTAL', grupo: '1036', ean: '7909306034135', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10103680243067_1.jpg' },
        { codigo: '10100570483010', descricao: 'OC HB DUOTECH 93424 M BLA/M BLA RED DEMO', grupo: '1005', ean: '7909306023368', status: 'active', imagem: 'https://b2b.hb.com.br/assets/images/produtos/P_10100570483010_1.jpg' }

    ];

    const rowsPerPage = 10;
    let currentPage = 1;

    const tableBody = document.querySelector('#productTable tbody');
    const selectAllCheckbox = document.getElementById('selectAll');
    const filterButton = document.getElementById('filterButton');
    const statusFilter = document.getElementById('statusFilter');
    const nameFilter = document.getElementById('nameFilter');
    const paginationNumbers = document.getElementById('paginationNumbers');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function renderTable() {
        tableBody.innerHTML = '';

        const filteredProducts = getFilteredProducts();

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageProducts = filteredProducts.slice(start, end);

        pageProducts.forEach(product => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><input type="checkbox"></td>
                <td>
                    <a href="/product/${product.codigo}/">
                        <img src="${product.imagem}" alt="${product.descricao}" onerror="this.onerror=null;this.src='https://b2b.hb.com.br/assets/images/produtos/notfound.png';">
                    </a>
                </td>
                <td>${product.codigo}</td>
                <td>${product.descricao}</td>
                <td>${product.grupo}</td>
                <td>${product.ean}</td>
                <td>${product.status}</td>
                <td class="actions">
                    <i class="fas fa-eye" title="Visualizar"></i>
                    <i class="fas fa-pencil-alt" title="Alterar"></i>
                    <i class="fas fa-trash-alt" title="Excluir" onclick="confirmDeletion(this)"></i>
                </td>
            `;

            tableBody.appendChild(row);
        });

        renderPagination(filteredProducts.length);
    }

    function renderPagination(totalItems) {
        paginationNumbers.innerHTML = '';
        const totalPages = Math.ceil(totalItems / rowsPerPage);

        if (totalPages <= 1) {
            return;
        }

        const createPageButton = (page) => {
            const pageButton = document.createElement('span');
            pageButton.textContent = page;
            pageButton.classList.add('page-number');
            if (page === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = page;
                renderTable();
            });
            return pageButton;
        };

        const addPaginationButton = (page) => {
            if (page < 1 || page > totalPages) return;
            paginationNumbers.appendChild(createPageButton(page));
        };

        if (currentPage > 1) {
            addPaginationButton(currentPage - 1);
        }

        addPaginationButton(currentPage);

        if (currentPage < totalPages) {
            addPaginationButton(currentPage + 1);
        }

        // Display "Previous" and "Next" buttons
        prevButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
        nextButton.style.display = currentPage < totalPages ? 'inline-block' : 'none';

        prevPageButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
        nextPageButton.style.display = currentPage < totalPages ? 'inline-block' : 'none';
    }

    function getFilteredProducts() {
        const statusValue = statusFilter.value.toLowerCase();
        const nameValue = nameFilter.value.toLowerCase();

        return products.filter(product => {
            const statusMatch = statusValue === 'all' || product.status.toLowerCase() === statusValue;
            const nameMatch = product.descricao.toLowerCase().includes(nameValue);
            return statusMatch && nameMatch;
        });
    }

    function confirmDeletion(element) {
        if (confirm('Tem certeza de que deseja excluir este item?')) {
            const row = element.closest('tr');
            row.remove();
        }
    }

    selectAllCheckbox.addEventListener('change', function () {
        const checkboxes = tableBody.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    filterButton.addEventListener('click', function () {
        currentPage = 1;
        renderTable();
    });

    prevPageButton.addEventListener('click', function () {
        currentPage = 1;
        renderTable();
    });

    nextPageButton.addEventListener('click', function () {
        currentPage = Math.ceil(getFilteredProducts().length / rowsPerPage);
        renderTable();
    });

    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });

    nextButton.addEventListener('click', function () {
        const totalPages = Math.ceil(getFilteredProducts().length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });

    renderTable();
});