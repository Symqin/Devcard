import { fetchGitHubUser } from '../api/github.js';
import { renderCard } from '../components/card.js';

export const renderMain = (container, navigate) => {
  const mainHTML = `
    <div class="flex flex-col min-h-screen max-w-3xl mx-auto pt-4 md:pt-8 animate-fade-in">
      
      <!-- navbar -->
      <nav class="flex justify-between items-center mb-8 bg-white p-4 border-4 border-black shadow-neo-sm">
        <h1 class="font-black text-xl uppercase tracking-tighter cursor-pointer" id="nav-logo">
          <i class="fa-brands fa-github text-2xl align-middle mr-1"></i> DevCard
        </h1>
        <button id="btn-back" class="font-bold uppercase bg-red-400 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-0 hover:translate-x-[2px] hover:translate-y-[2px]">
          <i class="fa-solid fa-arrow-left mr-1"></i> Kembali
        </button>
      </nav>
      
      <main class="flex-1 w-full">
        <!-- search bar -->
        <form id="search-form" class="flex flex-col md:flex-row gap-4 mb-8 w-full group">
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fa-solid fa-at text-gray-500 text-xl"></i>
            </div>
            <input type="text" id="username-input" placeholder="Ketik username GitHub..." required autocomplete="off"
                   class="w-full bg-white border-4 border-black pl-12 pr-4 py-4 text-lg font-bold focus:outline-none focus:bg-yellow-100 placeholder-gray-500 shadow-neo transition-colors">
          </div>
          
          <button type="submit" id="btn-search" class="bg-green-400 border-4 border-black px-10 py-4 text-xl font-black uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover active:translate-x-2 active:translate-y-2 active:shadow-none transition-all whitespace-nowrap">
            Cari <i class="fa-solid fa-magnifying-glass ml-2"></i>
          </button>
        </form>

        <!-- container result -->
        <section id="result-container" class="w-full relative min-h-[40vh] transition-all">
           <!-- empty state -->
           <div class="h-full flex flex-col items-center justify-center text-center p-12 bg-white border-4 border-black border-dashed opacity-80 min-h-[40vh]">
             <i class="fa-solid fa-id-card-clip text-6xl text-gray-300 mb-4"></i>
             <p class="font-bold text-xl text-gray-500">Hasil pencarian akan muncul di sini.</p>
           </div>
        </section>

        <!-- block actions (download) -->
        <section id="action-container" class="hidden mt-8 text-center bg-white border-4 border-black p-6 shadow-neo">
          <p class="font-bold mb-4">Suka dengan kartumu?</p>
          <button id="btn-download" class="bg-blue-400 border-4 border-black w-full md:w-auto px-8 py-4 text-lg font-black uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover active:translate-x-2 active:translate-y-2 active:shadow-none transition-all">
            <i class="fa-solid fa-download mr-2"></i> Unduh Kartu PNG
          </button>
        </section>
      </main>
    </div>
  `;
  container.innerHTML = mainHTML;

  // dom elements
  const form = document.getElementById('search-form');
  const input = document.getElementById('username-input');
  const resultContainer = document.getElementById('result-container');
  const actionContainer = document.getElementById('action-container');
  const btnSearch = document.getElementById('btn-search');
  
  // hook nav buttons
  container.querySelector('#btn-back').addEventListener('click', () => navigate('landing'));
  container.querySelector('#nav-logo').addEventListener('click', () => navigate('landing'));

  // form handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = input.value.trim();
    if (!username) return;

    // set loading ui
    actionContainer.classList.add('hidden');
    
    // ubah btn icon
    const originalBtnHTML = btnSearch.innerHTML;
    btnSearch.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    btnSearch.disabled = true;

    resultContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center p-16 bg-yellow-200 border-4 border-black shadow-neo min-h-[40vh]">
        <i class="fa-solid fa-cog fa-spin text-6xl mb-6"></i>
        <p class="font-black text-2xl uppercase tracking-widest">Mengambil data...</p>
      </div>
    `;

    try {
      // fetch data
      const userData = await fetchGitHubUser(username);
      
      // render component
      resultContainer.innerHTML = renderCard(userData);
      
      // show save btn
      actionContainer.classList.remove('hidden');
    } catch (error) {
      // render error alert
       resultContainer.innerHTML = `
        <div class="bg-red-400 border-4 border-black shadow-neo p-8 text-center min-h-[40vh] flex flex-col justify-center items-center">
          <i class="fa-solid fa-triangle-exclamation text-6xl mb-6 text-white" style="text-shadow: 4px 4px 0px #000;"></i>
          <h3 class="font-black text-3xl uppercase mb-3 bg-black text-white px-4 py-2 inline-block -rotate-2">Error!</h3>
          <p class="font-bold text-xl bg-white p-3 border-2 border-black inline-block">${error.message}</p>
        </div>
      `;
    } finally {
      btnSearch.innerHTML = originalBtnHTML;
      btnSearch.disabled = false;
    }
  });

  // handle download image
  document.getElementById('btn-download').addEventListener('click', async (e) => {
    const cardElement = document.getElementById('github-card-export');
    if (!cardElement) return;
    
    const btn = e.currentTarget;
    const originalText = btn.innerHTML;
    
    try {
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Menyimpan...';
      btn.disabled = true;
      
      // wait fonts loaded
      await document.fonts.ready;
      
      // init render hd
      const dataUrl = await htmlToImage.toPng(cardElement, {
        pixelRatio: 2,              // scale resolusi
        backgroundColor: '#bfdbfe', // cover bg color
      });
      
      // process trigger download
      const link = document.createElement('a');
      link.download = `github-card-${input.value.trim()}.png`;
      link.href = dataUrl;
      link.click();
      
    } catch (err) {
      alert('Gagal mengunduh kartu. Pastikan tidak ada ekstensi pemblokir skrip. Error: ' + err.message);
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });
};