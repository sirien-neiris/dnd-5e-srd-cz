# Tvorba virtuálních knih

SRD mají 2 základní typy obsahu:

**Knihy překladů** jsou přímým přenosem původních příruček (resp. překladů původních příruček) do online podoby, kterou zde vidíte. Tyto "knihy" (hlavní položky v levém menu) nesou stejný název, jako jejich předlohy a jejich text je identický s textem překladů, doslova písmeno od písmene. Knihy překladů jsou z podstaty "statické" a neměnné (možná až na občasné opravy překlepů atp.)

Pokud je některá překladová kniha teprve rozpracovaná a vy s ní chcete pomoct, tak prostě přeneste text původního překladu do .md jak je popsáno v [návodu ke GitHubu](http://dnd5esrd.d20.cz/faq/github.html#zalozeni-uctu-na-github) a v [návodu k formátování](http://dnd5esrd.d20.cz/faq/formatovani.html).

**Virtuální knihy** jsou "přeskládáním" obsahu ze "skutečných" (původních) příruček a slouží ke zpřehlednění obsahu - buď jeho přeuspořádáním (např. [Grimoár moci](http://dnd5esrd.d20.cz/grimoar/grimoar-moci.html), v němž najdete DnD kouzla uspořádaná nejprve podle úrovní a až následně podle abecedy) nebo seskládáním obsahu k jednomu tématu z různých zdrojů na jedno místo (např. [Soupis povolání](http://dnd5esrd.d20.cz/soupis/carodej.html), v němž najdete k danému povolání informace ze všech příruček okolo).

Virtuální knihy se mohou neustále rozšiřovat (když přibude nový obsah) popř. mohou vznikat nové (když někoho napadne nějaký nový typ obsahu který by si zasloužil přeskládat). Pokud chcete pomoct (což bude super!), tak se vám může hodit znát následující:

## Technické odlišnosti virtuálních knih

Virtuální knihy mají narozdil od knih překladů několik základních odlišností:

- Jejich text je místy doplněn o dodatečné informace (např. u kouzel uvádíme i originální názvy a příručku, z níž pocházejí)
- texty, které se opakují (nebo v budoucnu mohou opakovat) na více místech jsou uloženy zvlášť jako "snippety":
  - snippet obsahuje právě jeden kus textu (jedno kouzlo, jedno tajemné vzývání, jeden obor povolání atd.)
  - snippety stejného typu (kouzla, obory povolání...) jsou uloženy v samostatné složce
  - zdrojové soubory virtuálních knih opakovaný obsah ze snippetů neobsahují přímo, ale odkazem "snippet-zdroj:název-souboru"
  - ...tzn. Grimoár např. neobsahuje znění jediného kouzla, ale jen série odkazů typu "snippet-kouzla:ohniva-koule"
  
Tento přístup nám umožňuje snadno udržovat věci aktuální napříč mnoha různými místy, umožňuje i snazší tvorbu jednotlivých dokumentů a má několik dalších možných výhod do budoucna.

## Jak vytvářet virtuální knihu

### Grimoár 

#### Vkládání nových kouzel

Nová kouzla (ze zatím nezpracovaných příruček) přidávejte jako běžné .md soubory do [této složky](https://github.com/d20cz/dnd-5e-srd-cz/tree/master/gen/snippets/kouzla), přičemž:

- Název souboru by měl být "nazev-kouzla.md":
  - malá písmena
  - bez diakritiky
  - s pomlčkou místo mezer
- První nadpis souboru by měl být název kouzla a má jít o nadpis první úrovně (H1, "\# Název kouzla")
  - Jednotlivé virtuální knihy si úroveň nadpisů upraví podle své potřeby)
- Pod název klouzla vložte kurzívou jeho originální název
- Pod originální název vložte tučnou kurzívou název příručky, z níž kouzlo pochází
- pod název příručky vložte "hlavičku" kouzla v běžném pořadí
- pod hlavičku vložte standardně text kouzla

...je důležité tohle pořadí dodržet, protože to v budoucnu usnadní další strojové (hromadné) zpracování a úpravy souborů pro jakékoliv další potřeby či nové funkcionality. Příklad:

<card>
  název souboru: "ohniva-koule.md"
  
  # OHNIVÁ KOULE
  
  *Fireball*

***Příručka hráče***

*Zaklínání 3. úrovně*

**Vyvolání:** 1 akce

**Dosah:** 30 sáhů

**Složky:** V, P, S (drobná kulička z netopýřího guana a síry)

**Trvání:** Ihned

**Povolání:** Čaroděj, kouzelník

Z tvého ukazováčku se blýskne jasná čmouha do bodu, který zvolíš v rámci dosahu, a pak s tichým zaburácením rozkvete do ohnivého výbuchu. Každý tvor v kouli o poloměru 4 sáhy se středem v daném bodě si musí hodit záchranný hod na Obratnost. Když cíl neuspěje, utrpí ohnivé zranění 8k6, nebo poloviční zranění při úspěšném záchranném hodu. 

Oheň se rozšiřuje kolem rohů. Oheň zapaluje v oblasti hořlavé předměty, které nikdo nedrží ani nenese.

***Na vyšších úrovních.*** Sešleš-li toto kouzlo použitím pozice kouzla 4. či vyšší úrovně, za každou další úroveň pozice nad 3. se zvýší zranění o 1k6.
  
</card>

#### Tvorba nových grimoárů

Ve složce s ["templates"](https://github.com/d20cz/dnd-5e-srd-cz/tree/master/gen/templates) pro "generované soubory" si založte nový soubor s názvem "grimoar-neceho.md" ("neceho" samozřejmě nahraďte tím podle čeho chcete svůj grimoár řadit).

Na začátek souboru dejte H1 nadpis svého grimoáru

Následně používejte nadpisy nižší úrovně pro jednotlivé kategorie svého třídění (např. grimoár jmen tam má písmena abecedy, grimoár moci tam má úrovně kouzel jako H2 a u každé úrovně pak písmena abecedy jako H3)

Jednotlivá kouzla do kategorií vkládejte pomocí textu: ```snippet-kouzla:nazev-kouzla```, např. ```snippet-kouzla:ohniva-koule```. 

Mezi jednotlivými kouzly musí být prázdný řádka.

Tyto příkazy si můžete buď zkopírovat (a následně přeskládat nebo promazat) z nějakého již existujícího grimoáru nebo si je můžete vytvořit sami (v textovém editoru nebo např. v Excelu - viz níže konkrétní rady pro tvorbu grimoáru u povolání v Soupisu povolání).


### Soupis povolání

Soupis povolání má za cíl shrnout všechny informace k danému povolání na jedno místo. Samotný dokument daného povolání by - podobně jako grimoáry - neměl obsahovat nic kromě nadpisů a odkazů na snippety.

Otevřete si [složku se snippety povolání](https://github.com/d20cz/dnd-5e-srd-cz/tree/master/gen/snippets/povolani) a:

- vytvořte soubor se základem povolání, nazvěte ho "pov-zaklad.md" (např. "car-zaklad" pro čaroděje)
  - vkopírujte do něj text povolání z příručky hráče *kromě* oborů
  - název povolání dejte jako nadpis první úrovně (H1, "\# Název povolání")
  - za úvodní nadpis vložte nadpis 2. úrovně (H2) "Charakteristika povolání" (to je důležité kvůli řazení v levém menu)
  - na vhodná místa doplňte informace z ostatních příruček. 
  - Všechny věci co nejsou z Příručky hráče pod příslušným nadpisem jasně označte názvem příručky psaným tučnou kurzívou
- vytvořte soubory pro každý jeden obor daného povolání, nazvěte je "pov-obor-nazev" (např. "car-puvod-draci" pro čaroděje s dračím původem)
  - vkopírujte do nich jednotlivé obory
  - název oboru dejte jako nadpis třetí úrovně (H3, "\#\#\# Název oboru")
  - u oborů co nejsou původem z Příručky hráče vepište pod jejich první nadpis tučnou kurzívou název příručky původu

*V překopírovaných textech lze úroveň nadpisů upravit i hromadně funkcí nahrazení (začínejte od nejnižších, tzn. pokud máte soubor co začíná s H3 a potřebujete aby začínal s H1, tak nejprve nahraďte \#\#\# za \#, následně \#\#\#\# za \#\# atd.)*

Následně jděte do složky [se zdrojovými dokumenty](https://github.com/d20cz/dnd-5e-srd-cz/tree/master/gen/templates) virtuálních knih a založte v ní nový dokument s názvem "povolani.md" (např. "carodej.md"). 

- Stejně jako u grimoárů (viz výše) do tohoto dokumentu vepište jen nutné nadpisy, vše ostatní odkazujte ze snippet
- na začátek vložte snippet odkazující na základ povolání, za něj zařaďte snippety odkazující na jednotlivé obory
- u sesilatelských povolání následně vytvořte jejich vlastní grimoár

#### Tvorba grimoáru povolání

- Otevřete si Excel (nebo jiný tabulkový editor)
  - jděte v SRD do [11. kapitoly Příručky hráče](http://dnd5esrd.d20.cz/prirucka-hrace/11-kapitola.html) a překopírujte si do něj tabulku s přehledem kouzel jednotlivých povolání
  - v dalším sloupci si rozkopírujte funkci "=TEXTJOIN(, TRUE, "snippet-kouzla:", X) kde "X" je odkazem na sloupec v němž máte seznam kouzel povolání, které zrovna tvoříte
  - označte a zkopírujte sloupec s vygenerovanými "snippet-kouzla:Názvy kouzel"
- Překopírujte snippety kouzel do nástroje pro odstranění diakritiky ([například tenhle online](https://www.miniwebtool.com/remove-accent/) nebo si vygooglete jiný) a odstraňte diakritiku.
- Překopírujte snippety kouzel do nástroje pro odstranění Velkých Písmen. ([například tenhle online](https://convertcase.net/) nebo si opět vygooglete jiný) a zmenšete všechna písmena na malá
- Překopírujte snippety kouzel do PSPad (nebo jiného textového editoru) a:
  - nahraďte všechny mezery pomlčkami (" " za "-")
  - vytvořte prázdné řádky mezi jednotlivými snippety (PSPad: nahradit, povolit "regular expressions", nahradit "snippet" za "\nsnippet", provést od konce dokumentu nazpátek)
- vkopírujte výsledek do .md souboru s povoláním a doplňte nadpisy úrovní kouzel
