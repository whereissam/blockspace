---
title: "比特幣介紹"
description: "這篇文章將介紹比特幣的背景、交易方式以及發展歷史。 文章將先介紹比特幣的背景和基本概念，然後探討比特幣交易背後的技術 — UTXO 模型。 接著將概括比特幣的發展歷史，包括早期發展、快速成長、Taproot 升級以及最近的 Oridnal & layer2 提出"
author: "Sam"
role: "Strategic Marketing Manager"
authorImage: "@/images/blog/sam.avif"
authorImageAlt: "Avatar Description"
pubDate: 2024-02-18
cardImage: "@/images/blog/post-3.avif"
cardImageAlt: "Side view worker wearing gloves"
readTime: 3
tags: ["BTC","efficiency" ]
contents: [
        "Managing a construction project can be overwhelming, especially when it comes to procurement. That's why ScrewFast is committed to simplifying the process and keeping your projects within budget.",
        "With our line of affordable tools and equipment, you can find everything you need without breaking the bank. Our user-centric design ensures that our products are easy to use, saving you time and frustration on the job site.",
        "But affordability doesn't mean sacrificing quality. ScrewFast products are built to last, providing reliable performance and durability when you need it most. And with our comprehensive documentation and tutorials, you can integrate our products seamlessly into your workflow, maximizing efficiency and productivity.",
        "Whether you're a DIY enthusiast or a seasoned contractor, ScrewFast has the solutions you need to succeed. Experience the difference for yourself and see why ScrewFast is the trusted choice for hardware and construction needs."
]
---

## BTC 背景簡介

### 什麼是 BTC

比特幣（Bitcoin，簡稱 BTC）是一種加密貨幣，也是第一個成功實現去中心化的區塊鏈技術應用的加密貨幣。比特幣是由一個或一組使用 Satoshi Nakamoto 作為化名的人在 2008 年提出，2009 年正式發佈。

比特幣的具體特點如下：

- 去中心化：比特幣不依靠任何中央機構發行或管理，而是由全網的節點共同維護。
- 匿名性：比特幣交易的雙方只需使用地址進行交易，而無需透露真實身份。
- 不可逆性：比特幣交易一旦確認，則無法撤銷或修改。
- 有限發行：比特幣的總量為 2100 萬枚，且發行速度每四年減半，直到 2140 年左右發行完畢。

想了解為什麼要有 BTC 的發明的話可以看英文版『[Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)』或是『[比特幣：點對點電子現金系統](https://medium.com/taipei-ethereum-meetup/%E6%AF%94%E7%89%B9%E5%B9%A3-%E7%AB%AF%E5%B0%8D%E7%AB%AF%E9%9B%BB%E5%AD%90%E7%8F%BE%E9%87%91%E7%B3%BB%E7%B5%B1-bitcoin-a-peer-to-peer-electronic-cash-system-i-8a52de003c9)』去了解

### BTC 怎麼進行交易的

BTC 交易背後的技術是 UTXO ，UTXO 是 Unspent Transaction Output 的縮寫，意思是未花費的交易輸出。在比特幣中，交易是由輸入和輸出組成的。輸入是指交易中花費的 UTXO，輸出是指交易中生成的 UTXO。

UTXO 模型是比特幣交易模型的核心。在 UTXO 模型中，比特幣的餘額不是由賬戶來表示，而是由 UTXO 的集合來表示。要計算某個地址的餘額，需要將該地址的所有 UTXO 的值相加。

UTXO 模型具有以下幾個優點：

1. 安全性：UTXO 模型可以有效防止雙重支付攻擊。
2. 去中心化：UTXO 模型不需要任何中央機構來維護賬戶餘額。
3. 效率：UTXO 模型可以並行處理交易。

當然，UTXO 模型也存在一些挑戰，例如擴容性差、用戶體驗不佳等。這些挑戰需要在未來得到進一步的解決。

以下是一個簡單的 UTXO 模型示例：

假設 Alice#74 有 0.75 個 BTC，她將 0.5 個 BTC 轉給 Bob。交易的輸入是 Alice 的 0.75 個 BTC（輸入是 0.75 個沒錯），交易的輸出是 Bob 的 0.5 個 BTC。交易完成後 Alice 的 0.75 個 BTC 會減去 0.5 個，那 0.25 個才會送回 Alice 身上

![](https://hackmd.io/_uploads/HylA1HaOp.png)

UTXO 模型在比特幣中得到了廣泛應用，也是其他許多加密貨幣交易模型的基礎。

### BTC 發展歷史

比特幣的技術發展歷史可以分為以下幾個階段：

1. 早期發展（2009-2013）
   這一時期，比特幣的技術主要由中本聰和早期採礦者推動。中本聰在論文中提出了比特幣的底層技術，包括區塊鏈、工作量證明共識機制、UTXO 模型等。早期採礦者在比特幣的早期發展中起到了重要作用，他們為比特幣網路提供了算力支持，並推動了比特幣的普及。
2. 快速成長（2013-2017）
   這一時期，比特幣的技術得到了快速發展。湧現出了許多新的技術方案，例如：
   - 隔離見證（SegWit）：SegWit 是比特幣的一項軟分叉，可以提高比特幣的交易速度和可擴展性。
   - 閃電網路（Lightning Network）：閃電網路是比特幣的二層網路解決方案，可以提高比特幣的支付效率。
3. Taproot 升級（2021-2023）
   Taproot 升級被認為是比特幣協議的重要里程碑。它有可能使比特幣更具可擴展性、更安全且更私密，從而使其更適合於廣泛的應用。
   - 提高隱私性： Taproot 使得在區塊鏈上隱藏交易詳細信息變得更加容易。這可以提高用戶的隱私並使其更難追蹤比特幣交易。
   - 提高可擴展性： Taproot 有助於提高比特幣網路的交易處理能力。這可以降低交易費用並使比特幣更適合於日常使用。
   - 提高安全性： Taproot 使比特幣交易更難被偽造或篡改。這可以提高比特幣的安全性和可靠性。
4. Oridnal & layer2（2023- 至今）
   - 由 Casey Rodarmor 於 2023 年初提出的，解決比特幣上 NFT 存在的一些問題，比特幣上 NFT - 銘文的戰場就此打開
   - 因為銘文的火熱發展促進了 BTC 生態的繁榮，但也加劇了 BTC 網路資源的競爭，過高的 fee 成本，與未來可預見的 BTC 的上漲，也在不斷地增加 BTC 生態玩家的進入門檻。 這促使了人們跟著更多的開始討論 BTC 的擴容方案，看著隔壁的在 ETH rollup 與模組化的發展和理論成果上，BTC layer2 也開始百花齊放

這只是一個簡單的歷史，中間省略了很多東西，接下來我會從一些技術的角度去談 BTC Layer2