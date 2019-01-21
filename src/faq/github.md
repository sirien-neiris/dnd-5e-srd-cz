---
sidebar: auto
---

# Obsluha GitHub repozitáře

## Pojmy

Moc se omlouváme, tím, že používáme Github, jsme bohužel nuceni používat i trochu tamnější ITácké terminologie. Nemusíte se toho děsit ani si to "zapamatovávat", ale bude lepší, když si alespoň pročtete tento seznam:

 * **Git** - systém verzování souborů (nemusíte řešit, prostě název technologie, kterou toto SRD používá)
 * **GitHub** - stránka pro skladování git projektů a práci s nimi (jako Dropbox / Google Drive, jen úplně něco jinýho)
   * GitHub bohužel nemá možnost anonymního přispívání, takže **k editaci SRD je potřeba udělat si účet**.
 * **Repozitář** - složka
 * **Master** - hlavní verze (složky, dokumentu - hlavní složka / hlavní dokument)
 * **Fork (věc)** - kopie oddělená od originálu, kterou lze dále měnit
 * **Fork (činnost)** - vytvořit fork, tzn. udělat si vlastní kopii originálu (masteru)
 * **Pull** - odeslaný požadavek o spojení vašeho forku (editace) s originálem (masteru) (žádost o přepsání masteru vaším forkem)
 * **Markdown (soubor)** formát souboru (jako .docx nebo .xls) v němž je text formátovaný za pomocí markdownu
 * **Markdown (formát)** způsob formátování hvězdičkami a jinými značkami, který znáte z internetu - \*kurzíva*\* je *kurzíva*, \*\*tučně\*\* je **tučně** atd.

## Základní fungování 

 * Pro místní SRD máme na Githubu vlastní složku
   * Všechen obsah místního SRD je v této složce
 * Obsah SRD je uložen v textových "markdown" souborech (koncovka .md, název_souboru.md)
 * **Tyto soubory jsou přístupné** přes tlačítko *"Editace stránky na GitHub"* vždy na konci stránky nalevo dole
 * **Jednotlivé soubory lze editovat** (detaily viz níže)
   * jednorázově (pro velmi rychlé úpravy nebo pro jednorázové nahrání věcí)
   * rozsáhle (za pomoci vytvoření vlastního forku)
 * Všechny editace prochází kontrolou na naší straně (Github umožňuje velmi rychlé porovnání verzí souboru)
   * změny se tedy neprojeví ihned, ale až po našem schválení (tzn. nebojte, nic nerozbijete)
   
### Založení účtu na Github

...vám zabere míň než 1 minutu. Doslova. Jde o opensource projekt ITáků pro ITáky:

* jděte na [github.com](https://github.com/)
* napíšete nick
* zadáte e-mail
* zvolíte si heslo
* ...a kliknete na "založit účet"

Hotovo, nic víc v tom neni, tak se toho nebojte a [jděte to udělat hned teď](https://github.com/)



## Jednorázová editace

* Na stránce kterou chcete editovat nalevo dole kliknete na ***Editace stránky na GitHub***
* Objevíte se rovnou v editačním okně. Změníte co chcete změnit. 
  * Dejte si pozor ať to je skutečně VŠECHNO co chcete změnit!!!
* Dole kliknete na zelené tlačítko ***Propose file change***
* Změny se uloží do samostatného souboru a objevíte se na potvrzovací stránce. Zde klikněte na ***Create pull request***

Poté, co editaci uzavřete a odešlete pomocí Create pull request **už nezkoušejte dělat žádné další změny**, dokud nezapracujeme ty současné (poté je udělejte opět standardní cestou). Ano, Github to umožňuje a zvládnete se k tomu proklikat, ale nám to udělá dost bordel - pokud chcete pracovat postupně a věci si v mezičase ukládat, tak prosíme použijte korektnější metodu:



## Rozsáhlá ("korektní") editace

### Vytvoření vlastní kopie (forku)

* Na stránce kterou chcete editovat nalevo dole kliknete na ***Editace stránky na GitHub***
* Nalevo nahoře máte vypsanou "cestu" k souboru, který jste chtěli editovat. 
* Klikněte v ní na druhou položku cesty (tedy za to co vidíte za "d20cz", v případě Fate to je "d20cz / fate-srd-cz", takže kliknete na ***fate-srd-cz***
* Napravo nahoře je tlačítko ***Fork***. Klikněte na něj

Výsledkem je že se vám na Githubu za moment vytvoří vaše vlastní kopie SRD obsahu (viz dále)


#### Obrázkový (printscreen) průvodce

Tlačítko ***Editace stránky na GitHub*** najdete určitě sami - pokud jste zapomněli, tak je nakaždé stránce SRD na stejném místě co Peroutkův článek o Hitlerovi. Když na něj kliknete, přenese vás to na Github. To co vás zajímá je v horní části stránky:

**Cesta k souboru:***

![cesta k souboru](~./images/cesta-k-souboru.jpg)


**Fork tlačítko**

![fork tlacitko](~./images/fork-tlacitko.jpg)


### Práce s vaší kopií (forkem)

Po kliknutí na Fork tlačítko se vám vytvoří vlastní fork - tedy kopie složky, do níž jste rovnou přeneseni. V ní vidíte:

* opět cestu k vaší složce (forku) - na stejném místě nalevo nahoře
* po pravé straně nad zobrazením samotné složky tlačítka pro práci se soubory (tvorba nových, nahrávání, vyhledávání)
* podsložku ***src*** - ta vás zajímá *("src" jako zkratka z "sources", tedy "zdroje" - zdrojové soubory)*
  * v této složce najdete složky s jednotlivými "knihami", tedy nejvyššími položkami z levého menu - Fate Core, FAE atd.
  * v těchto složkách se pak nachází samostatné jednotlivé soubory
* Po otevření souboru jej musíte otevřít pro editaci - tlačítko tužtičky napravo nad souborem
* Po dokončení práce soubor uložte tlačítkem ***Propose file change***, ALE ještě předtím:
  * pokud to je vaše první editace, přepněte překlikávátko z "master branch" do "create a new branch"
  * pokud to je už x-tá editace, tak nechte vybranou stávající "větev"
  * *nové podobě souboru se říká "commit". To si nemusíte pamatovat a není to důležité, ale může se vám to hodit vědět někdy jindy.*
  
* **pokud si jen ukládáte práci, ale budete se k ní chtít vrátit**, tak zde vaše práce končí 
  * můžete se vrátit do editace (tlačítko "View file" napravo dole nad náhledem změn, poté opět tlačítko tužtičky napravo)
  * nebo můžete prostě odejít a k věci se vrátit kdykoliv později
* **pokud jste s prací hotovi, vytvoříte pull request** pro celý váš fork
  * vraťte se do vaší základní složky
  * napravo nad přehledem obsahu složky klikněte na ***New pull request***, následně na ***Create pull request***
  * Při odesílání pull requestu prosím **krátce popište do textového pole změny které jste udělali** - Github sice usnadňuje porovnání souborů, ale je to mnohem snazší zpracovat když člověk ví, na co se vlastně má dívat.

Jakmile změny odešlete, tak můžete svůj fork pro pořádek klidně smazat (viz níže)
  
#### Obrázkový (printscreen) průvodce

**Vaše složka (fork)** 

Cesta je zobrazená nalevo nahoře, tlačítka pro práci se soubory o něco níže po pravé straně:

![vase slozka - fork](~./images/vlastni-fork.jpg)


**src složka**

![src slozka](~./images/slozka-src.jpg)


**Zdrojové soubory**

![zdrojove soubory](~./images/zdrojove-soubory.jpg)


**Tlačítko editace souboru**

![tlacitko-editace](~./images/tlacitko-editace.jpg)


**Ukládání editací**

![ukladani editaci](~./images/ukladani-editaci.jpg)


**Uložená editace**

![ulozena editace](~./images/ulozena-editace.jpg)


**Odeslání změn (nový pull)**

![odeslani editace](~./images/new-pull.jpg)

...a následně

![potvrzeni odeslani](~./images/potvrzeni-odeslani.jpg)



### Smazání forku

Jakmile odešlete svoje změny tak můžete svůj fork klidně smazat.

* Otevřete si znovu svůj fork
  * pokud ho nemáte poruce, tak napravo nahoře v uživatelském menu tlačítko ***your repositories***
* Ve svém forku jděte do Settings 
* Odscrollujte úplně na konec stránky kde se nachází červeně obtáhnutá "Danger Zone"
* klikněte na poslední červeně nadepsané tlačítko ***Delete this repository***
  * objeví se potvrzovací dialog který vás vyzve k napsání jména smazávané složky. Jde o tu část jména která je v názvu cesty, tedy pro Fate to je "fate-srd-cz". Pak můžete dát potvrdit.


#### Obrázkový (printscreen) průvodce

**Vaše složky**

![vase slozky](~./images/your-repositories.jpg)


**Fork settings**

![settings](~./images/settings.jpg)


**Danger Zone - delete**

![danger zone delete tlacitko](~./images/danger-zone.jpg)


**Potvrzení smazání**

![potvrzeni-smazani](~./images/potvrzeni-smazani.jpg)





## Jsem "ITák" a vím o co jde - info navíc

## Struktura složek

* /src/ - záknladní složka s daty
* /src/.vuepress - složka s nastavením SRD nepotřebujete měnit
* /src/menu.js - zde je potřeba přidávat kapitoly do menu 
* /src/README.md - hlavní stránka SRD 
* /src/{složka s knihou SRD}/ - složka pro všechny data k srd knížce
* /src/{složka s knihou SRD}/images/ - složka s obrázky pro danou knížku  
* /src/{složka s knihou SRD}/*.md - jednotlivé stránka knihy v markdownu
