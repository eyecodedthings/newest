import React, { useState, useEffect, useMemo } from 'react';

// Real pets data from the BGSI Tools GitHub repository
const PETS_DATA = [
  {
    "name": "The Overworld",
    "image": "https://static.wikia.nocookie.net/bgs-infinity/images/d/dc/The_Overworld_Icon.png",
    "eggs": [
      {
        "name": "Common Egg",
        "image": "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Common_Egg.png",
        "infinityEgg": "The Overworld",
        "index": "The Overworld",
        "available": true,
        "pets": [
          {
            "name": "Doggy",
            "rarity": "Common",
            "droprate": 2.5,
            "bubbles": 1,
            "gems": 0,
            "currency": 1.1,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/0/09/Doggy.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/e/e4/Shiny_Doggy.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Common Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Common_Egg.png"
          },
          {
            "name": "Kitty",
            "rarity": "Common",
            "droprate": 3.3333333333333335,
            "bubbles": 1,
            "gems": 0,
            "currency": 1.1,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/5/59/Kitty.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/1/1f/Shiny_Kitty.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Common Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Common_Egg.png"
          },
          {
            "name": "Bunny",
            "rarity": "Unique",
            "droprate": 4,
            "bubbles": 2,
            "gems": 0,
            "currency": 1.2,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/8/82/Bunny.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/e/e7/Shiny_Bunny.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Common Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Common_Egg.png"
          },
          {
            "name": "Bear",
            "rarity": "Rare",
            "droprate": 20,
            "bubbles": 2,
            "gems": 0,
            "currency": 1.5,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/a/a4/Bear.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/9/97/Shiny_Bear.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Common Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Common_Egg.png"
          },
          {
            "name": "King Doggy",
            "rarity": "Secret",
            "droprate": 100000000,
            "bubbles": 2750,
            "gems": 50,
            "currency": 3300,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny", "Mythic", "Shiny Mythic"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/a/a8/King_Doggy.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Shiny_King_Doggy.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/7/78/Mythic_King_Doggy.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/5/52/Shiny_Mythic_King_Doggy.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Common Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/5/5b/Common_Egg.png"
          }
        ]
      },
      {
        "name": "Spotted Egg",
        "image": "https://static.wikia.nocookie.net/bgs-infinity/images/6/6f/Spotted_Egg.png",
        "infinityEgg": "The Overworld",
        "index": "The Overworld",
        "available": true,
        "pets": [
          {
            "name": "Mouse",
            "rarity": "Common",
            "droprate": 2.5,
            "bubbles": 2,
            "gems": 0,
            "currency": 2,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/5/5c/Mouse.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/a/aa/Shiny_Mouse.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Spotted Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/6/6f/Spotted_Egg.png"
          },
          {
            "name": "Wolf",
            "rarity": "Common",
            "droprate": 4,
            "bubbles": 2.1,
            "gems": 0,
            "currency": 2,
            "currencyVariant": "Coins",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/c/c8/Wolf.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/8/88/Shiny_Wolf.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Spotted Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/6/6f/Spotted_Egg.png"
          }
        ]
      },
      {
        "name": "Chance Egg",
        "image": "https://static.wikia.nocookie.net/bgs-infinity/images/d/d8/Chance_Egg.png",
        "available": true,
        "pets": [
          {
            "name": "Galaxy Dice",
            "rarity": "Rare",
            "droprate": 1.6666666666666667,
            "bubbles": 45,
            "gems": 0,
            "currency": 22,
            "currencyVariant": "Tickets",
            "variants": ["Normal", "Shiny"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/6/66/Galaxy_Dice.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/b/b0/Shiny_Galaxy_Dice.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Chance Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/d/d8/Chance_Egg.png"
          },
          {
            "name": "Ring Master",
            "rarity": "Legendary",
            "droprate": 100000,
            "bubbles": 1950,
            "gems": 40,
            "currency": 1950,
            "currencyVariant": "Tickets",
            "variants": ["Normal", "Shiny", "Mythic", "Shiny Mythic"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/b/bd/Ring_Master.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/a/a8/Shiny_Ring_Master.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/b/b0/Mythic_Ring_Master.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/f/f1/Shiny_Mythic_Ring_Master.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Chance Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/d/d8/Chance_Egg.png"
          },
          {
            "name": "Royal Guardian",
            "rarity": "Secret",
            "droprate": 200000000,
            "bubbles": 3900,
            "gems": 85,
            "currency": 4250,
            "currencyVariant": "Tickets",
            "variants": ["Normal", "Shiny", "Mythic", "Shiny Mythic"],
            "image": [
              "https://static.wikia.nocookie.net/bgs-infinity/images/5/57/Royal_Guardian.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/c/cf/Shiny_Royal_Guardian.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/4/49/Mythic_Royal_Guardian.png",
              "https://static.wikia.nocookie.net/bgs-infinity/images/1/10/Shiny_Mythic_Royal_Guardian.png"
            ],
            "limited": false,
            "available": true,
            "obtainedFrom": "Chance Egg",
            "obtainedFromImage": "https://static.wikia.nocookie.net/bgs-infinity/images/d/d8/Chance_Egg.png"
          }
        ]
      }
    ]
  }
];

// Header Component
export const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-purple-400">BGSI Tools</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-purple-400 hover:text-purple-300 font-medium">CALCULATOR</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 font-medium">INDEX</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 font-medium">PET STATS</a>
          </nav>
        </div>
        <div className="flex items-center">
          <a href="https://github.com/borngame/bgsi-tools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ calculatorSettings, setCalculatorSettings, selectedEgg, setSelectedEgg }) => {
  const allEggs = PETS_DATA.flatMap(world => world.eggs || []);
  
  return (
    <div className="w-80 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
      <div className="space-y-4">
        {/* Egg Selection */}
        <div>
          <label className="flex items-center text-yellow-400 font-medium mb-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Egg
          </label>
          <select 
            value={selectedEgg?.name || ''} 
            onChange={(e) => {
              const egg = allEggs.find(egg => egg.name === e.target.value);
              setSelectedEgg(egg);
            }}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-400"
          >
            <option value="">Select an egg...</option>
            {allEggs.map((egg, idx) => (
              <option key={idx} value={egg.name}>{egg.name}</option>
            ))}
          </select>
        </div>

        {/* Lucky Potion */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-green-400 font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Lucky Potion
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">None</div>
            <button 
              onClick={() => setCalculatorSettings(prev => ({...prev, luckyPotion: !prev.luckyPotion}))}
              className={`w-6 h-3 rounded-full ${calculatorSettings.luckyPotion ? 'bg-green-500' : 'bg-gray-600'} relative transition-colors`}
            >
              <div className={`w-2 h-2 bg-white rounded-full absolute top-0.5 transition-transform ${calculatorSettings.luckyPotion ? 'translate-x-3' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
        </div>

        {/* Mystic Potion */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-purple-400 font-medium">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            Mystic Potion
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">None</div>
            <button 
              onClick={() => setCalculatorSettings(prev => ({...prev, mysticPotion: !prev.mysticPotion}))}
              className={`w-6 h-3 rounded-full ${calculatorSettings.mysticPotion ? 'bg-purple-500' : 'bg-gray-600'} relative transition-colors`}
            >
              <div className={`w-2 h-2 bg-white rounded-full absolute top-0.5 transition-transform ${calculatorSettings.mysticPotion ? 'translate-x-3' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
        </div>

        {/* Infinity Elixir */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-white font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Infinity Elixir
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">None</div>
            <input 
              type="checkbox"
              checked={calculatorSettings.infinityElixir}
              onChange={(e) => setCalculatorSettings(prev => ({...prev, infinityElixir: e.target.checked}))}
              className="form-checkbox h-4 w-4 text-purple-600"
            />
          </div>
        </div>

        {/* Double Luck Gamepass */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-white font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Double Luck Gamepass
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">None</div>
            <input 
              type="checkbox"
              checked={calculatorSettings.doubleLuckGamepass}
              onChange={(e) => setCalculatorSettings(prev => ({...prev, doubleLuckGamepass: e.target.checked}))}
              className="form-checkbox h-4 w-4 text-purple-600"
            />
          </div>
        </div>

        {/* Lucky Streak */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-green-400 font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Lucky Streak
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">None</div>
            <input 
              type="number"
              value={calculatorSettings.luckyStreak}
              onChange={(e) => setCalculatorSettings(prev => ({...prev, luckyStreak: parseInt(e.target.value) || 0}))}
              className="w-16 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
              min="0"
              max="999"
            />
          </div>
        </div>

        {/* High Roller Pets */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-red-400 font-medium">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            High Roller Pets
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">0</div>
          </div>
        </div>

        {/* Locket Together */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-red-400 font-medium">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            Locket Together
          </label>
          <div className="text-right">
            <div className="text-gray-400 text-sm">0</div>
          </div>
        </div>

        {/* Boost gems >500% */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-red-400 font-medium">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            Boost gems >500%
          </label>
          <div className="text-right">
            <input 
              type="checkbox"
              checked={calculatorSettings.boostGems}
              onChange={(e) => setCalculatorSettings(prev => ({...prev, boostGems: e.target.checked}))}
              className="form-checkbox h-4 w-4 text-purple-600"
            />
          </div>
        </div>

        {/* Double Luck event */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-red-400 font-medium">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            Double Luck event
          </label>
          <div className="text-right">
            <input 
              type="checkbox"
              checked={calculatorSettings.doubleLuckEvent}
              onChange={(e) => setCalculatorSettings(prev => ({...prev, doubleLuckEvent: e.target.checked}))}
              className="form-checkbox h-4 w-4 text-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Content Component
export const MainContent = ({ selectedEgg, calculatorSettings }) => {
  // Calculate luck multiplier based on settings
  const luckMultiplier = useMemo(() => {
    let multiplier = 1;
    if (calculatorSettings.luckyPotion) multiplier += 0.5;
    if (calculatorSettings.doubleLuckGamepass) multiplier *= 2;
    if (calculatorSettings.doubleLuckEvent) multiplier *= 2;
    if (calculatorSettings.boostGems) multiplier *= 1.25;
    if (calculatorSettings.luckyStreak > 0) multiplier += (calculatorSettings.luckyStreak * 0.01);
    return multiplier;
  }, [calculatorSettings]);

  const mysticMultiplier = calculatorSettings.mysticPotion ? 2 : 1;

  // Calculate stats
  const stats = useMemo(() => {
    const luck = Math.round(luckMultiplier * 100) / 100;
    const shiny = Math.round(48 / luckMultiplier);
    const mystic = Math.round(100 / mysticMultiplier);
    const shinyMystic = Math.round((48 * 100) / (luckMultiplier * mysticMultiplier));
    
    return { luck, shiny, mystic, shinyMystic };
  }, [luckMultiplier, mysticMultiplier]);

  return (
    <div className="flex-1 p-6">
      {/* Stats Header */}
      <div className="mb-6">
        <div className="flex space-x-8 mb-4">
          <div className="text-center">
            <div className="text-yellow-400 font-bold">HATCH CHANCES</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 font-bold">HATCH TIMES</div>
          </div>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            <span>Luck: {stats.luck}%</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            <span>Shiny: 1/{stats.shiny}</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            <span>Mystic: 1/{stats.mystic}</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            <span>Shiny Mystic: 1/{stats.shinyMystic}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600 mr-2" />
            Use present chances
          </label>
        </div>
      </div>

      {/* Pet Table */}
      {selectedEgg && (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-white font-medium">Pet</th>
                <th className="px-4 py-3 text-left text-yellow-400 font-medium">Normal</th>
                <th className="px-4 py-3 text-left text-yellow-400 font-medium">Shiny</th>
                <th className="px-4 py-3 text-left text-purple-400 font-medium">Mythic</th>
                <th className="px-4 py-3 text-left text-yellow-400 font-medium">Shiny Mythic</th>
              </tr>
            </thead>
            <tbody>
              {selectedEgg.pets && selectedEgg.pets.map((pet, index) => {
                const normalChance = Math.round(pet.droprate / luckMultiplier * 1000000) / 1000000;
                const shinyChance = Math.round((pet.droprate * 48) / luckMultiplier * 1000) / 1000;
                const mythicChance = Math.round((pet.droprate * 100) / (luckMultiplier * mysticMultiplier) * 1000) / 1000;
                const shinyMythicChance = Math.round((pet.droprate * 48 * 100) / (luckMultiplier * mysticMultiplier) * 1000) / 1000;
                
                return (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <img 
                          src={pet.image[0]} 
                          alt={pet.name}
                          className="w-8 h-8 mr-3 rounded"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div>
                          <div className="text-white font-medium">{pet.name}</div>
                          <div className={`text-xs ${
                            pet.rarity === 'Common' ? 'text-gray-400' :
                            pet.rarity === 'Unique' ? 'text-green-400' :
                            pet.rarity === 'Rare' ? 'text-blue-400' :
                            pet.rarity === 'Epic' ? 'text-purple-400' :
                            pet.rarity === 'Legendary' ? 'text-yellow-400' :
                            pet.rarity === 'Secret' ? 'text-red-400' :
                            'text-gray-400'
                          }`}>
                            {pet.rarity}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white">1/{normalChance.toLocaleString()}</td>
                    <td className="px-4 py-3 text-white">1/{shinyChance.toLocaleString()}</td>
                    <td className="px-4 py-3 text-white">
                      {pet.variants.includes('Mythic') ? `1/${mythicChance.toLocaleString()}` : '-'}
                    </td>
                    <td className="px-4 py-3 text-white">
                      {pet.variants.includes('Shiny Mythic') ? `1/${shinyMythicChance.toLocaleString()}` : '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      
      {!selectedEgg && (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-lg">Select an egg to view hatch chances</p>
        </div>
      )}
    </div>
  );
};

// Main Calculator Component
export const Calculator = () => {
  const [selectedEgg, setSelectedEgg] = useState(null);
  const [calculatorSettings, setCalculatorSettings] = useState({
    luckyPotion: false,
    mysticPotion: false,
    infinityElixir: false,
    doubleLuckGamepass: false,
    luckyStreak: 0,
    boostGems: false,
    doubleLuckEvent: false
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex">
        <Sidebar 
          calculatorSettings={calculatorSettings}
          setCalculatorSettings={setCalculatorSettings}
          selectedEgg={selectedEgg}
          setSelectedEgg={setSelectedEgg}
        />
        <MainContent 
          selectedEgg={selectedEgg}
          calculatorSettings={calculatorSettings}
        />
      </div>
    </div>
  );
};