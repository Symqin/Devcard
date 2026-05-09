export const renderLanding = (container, navigate) => {
  const landingHTML = `
    <div class="flex flex-col items-center justify-center min-h-[80vh] text-center gap-8 px-4">
      <div class="bg-yellow-300 border-4 border-black shadow-neo p-8 md:p-14 max-w-2xl rounded-sm transition-transform hover:-translate-y-2">
        
    
        
        <h1 class="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter leading-none">
          GitHub<br><span class="text-pink-500 stroke-text">Card</span> Gen.
        </h1>
        
        <p class="text-lg md:text-xl font-bold mb-10 text-gray-800 leading-relaxed border-l-4 border-black pl-4 text-left bg-white p-4 shadow-neo-sm">
          Buat kartu profil GitHub Anda. Masukkan username dan bagikan statistik open-source-mu dengan gaya epik!
        </p>
        
        <button id="btn-start" class="bg-pink-400 border-4 border-black px-8 py-5 text-xl font-black uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover active:translate-x-2 active:translate-y-2 active:shadow-none transition-all w-full md:w-auto">
          Mulai Sekarang <i class="fa-solid fa-bolt ml-2"></i>
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML = landingHTML;

  // setup event nav
  container.querySelector('#btn-start').addEventListener('click', () => {
    navigate('main');
  });
};