// ==== story.js - 征途系統資料庫 ====

window.WastelandDB = {
    storyScripts: {
        "CH01": {
            title: "第一章：廢土復興",
            // 整個舞台的大背景圖
            bgImage: "https://raw.githubusercontent.com/ciouyan77/DMMO_PIC/refs/heads/main/IMG_9274.png",
            dialogues: [
                { 
                    speaker: "倖存者", 
                    text: "這件機甲殘骸上...有舊時代都市防衛隊的標誌。我們終於回到這裡了，『廢土復興』計畫的起點。",
                    // 這裡放倖存者的立繪圖片去背去背 (PNG)，暫找一隻廢土防護服像素或科幻人物做範例
                    sprite: "https://raw.githubusercontent.com/ciouyan77/-MMO/refs/heads/main/IMG_9424.png?token=GHSAT0AAAAAAECA3COGLJUEUK3ROF3KQ6BW2S47OGQ" 
                },
                { 
                    speaker: "廢土獵犬", 
                    text: "（低聲吼叫，齒縫間滴落黑水，死死盯著前方深暗的隧道）",
                    // 換上獵犬的立繪
                    sprite: "https://api.dicebear.com/7.x/bottts/svg?seed=cyberdog&backgroundColor=transparent"
                },
                { 
                    speaker: "系統警告", 
                    text: "前方高能量生化反應！檢測到【重裝液態鐵衛】，暴擊運算模組已失效！",
                    // 系統警告時畫面不放人型立繪 (留空)
                    sprite: "" 
                }
            ],
            targetBossId: "BOSS_STORY_01"
        }
    },
    storyBosses: {
        "BOSS_STORY_01": {
            id: "BOSS_STORY_01",
            name: "重裝液態鐵衛",
            hp: 8500,
            atk: 180,
            def: 120,
            recommendedGear: "第三副本套裝 +7",
            specialTraits: {
                critResist: 1.0,      
                healSuppression: 0.0, 
                traitDescription: "【合金裝甲】完全免疫暴擊傷害。請利用基礎屬性與生化特效打破僵局。"
            }
        }
    }
};
