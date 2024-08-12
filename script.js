let hunger = 50;
let energy = 50;

const hungerElement = document.getElementById('hunger');
const energyElement = document.getElementById('energy');
const pet = document.getElementById('pet');

const updateStats = () => {
    hungerElement.textContent = hunger;
    energyElement.textContent = energy;
    updateMood();
};

const updateMood = () => {
    pet.classList.remove('hungry', 'tired');
    
    if (hunger >= 70) {
        pet.classList.add('hungry');
        pet.textContent = '😢'; // Sad face for hunger
    }
    
    if (energy <= 30) {
        pet.classList.add('tired');
        pet.textContent = '😴'; // Sleepy face for tiredness
    }
    
    if (hunger < 70 && energy > 30) {
        pet.textContent = '😊'; 
    }
};

const feedPet = () => {
    hunger = Math.max(hunger - 10, 0);
    energy = Math.max(energy - 5, 0);
    updateStats();
};

const playWithPet = () => {
    energy = Math.max(energy - 10, 0);
    hunger = Math.min(hunger + 10, 100);
    updateStats();
};

const putPetToSleep = () => {
    energy = Math.min(energy + 20, 100);
    hunger = Math.min(hunger + 5, 100);
    updateStats();
};

document.getElementById('feed').addEventListener('click', feedPet);
document.getElementById('play').addEventListener('click', playWithPet);
document.getElementById('sleep').addEventListener('click', putPetToSleep);

// Simulate the passage of time
setInterval(() => {
    hunger = Math.min(hunger + 1, 100);
    energy = Math.max(energy - 1, 0);
    updateStats();
}, 1000);
