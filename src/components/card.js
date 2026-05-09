export const renderCard = (user) => {
  // format tgl join
  const joinedDate = user.created_at ? new Date(user.created_at).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric'
  }) : 'Tidak diketahui';

  // variable checks
  const name = user.name || user.login;
  const bio = user.bio || 'Pengguna ini masih misterius dan belum menambahkan bio.';
  const location = user.location || 'Bumi';
  
  let blogLinkHTML = '<span class="text-gray-500">Tidak ada blog</span>';
  if (user.blog) {
    const blogUrl = user.blog.startsWith('http') ? user.blog : `https://${user.blog}`;
    blogLinkHTML = `<a href="${blogUrl}" class="hover:underline text-blue-800 break-all" target="_blank" rel="noopener noreferrer">${user.blog}</a>`;
  }

  return `
    <!-- target wrapper untuk export html-to-image -->
    <div id="github-card-export" class="p-4 md:p-8 bg-blue-200">
      <div class="bg-pink-100 border-4 border-black shadow-neo w-full max-w-2xl mx-auto transform transition-all relative overflow-hidden mt-4 pb-2">
      
      <!-- tag banner -->
      <div class="absolute top-4 -right-10 bg-yellow-400 text-black font-black uppercase py-1 px-12 rotate-45 border-y-4 border-black shadow-neo-sm z-10 text-xs tracking-widest">
        D E V C A R D
      </div>

      <div class="p-6 md:p-8 flex flex-col gap-6 w-full">
        
        <!-- id / profile header -->
        <div class="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border-b-4 border-black pb-8 relative">
          
          <div class="relative">
             <img src="${user.avatar_url}" alt="Avatar ${user.login}" crossorigin="anonymous"
                  class="w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-black shadow-neo bg-white rounded-none">
          </div>
          
          <div class="flex-1 min-w-0 flex flex-col justify-center pt-2">
            <h2 class="text-4xl font-black uppercase break-words text-black pb-2" style="line-height: 1.2;">${name}</h2>
            
            <div class="mt-2 mb-4">
              <a href="${user.html_url}" target="_blank" class="text-lg md:text-xl font-bold bg-green-300 inline-block px-3 py-1 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                @${user.login}
              </a>
            </div>
            
            <p class="text-base md:text-lg font-bold text-gray-800 line-clamp-3 bg-white border-2 border-black p-3 shadow-neo-sm leading-snug">
              ${bio}
            </p>
          </div>
        </div>

        <!-- grid counters -->
        <div class="grid grid-cols-3 gap-3 md:gap-5 border-b-4 border-black pb-8 text-center mt-2">
          
          <div class="bg-yellow-300 border-4 border-black p-3 md:p-5 shadow-neo hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
            <p class="text-xs md:text-sm font-black uppercase tracking-widest mb-2">Repos</p>
            <p class="text-3xl md:text-4xl font-black pb-2" style="line-height: 1;">${user.public_repos}</p>
          </div>
          
          <div class="bg-blue-300 border-4 border-black p-3 md:p-5 shadow-neo hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
            <p class="text-xs md:text-sm font-black uppercase tracking-widest mb-2">Followers</p>
            <p class="text-3xl md:text-4xl font-black pb-2" style="line-height: 1;">${user.followers}</p>
          </div>
          
          <div class="bg-purple-300 border-4 border-black p-3 md:p-5 shadow-neo hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
            <p class="text-xs md:text-sm font-black uppercase tracking-widest mb-2">Following</p>
            <p class="text-3xl md:text-4xl font-black pb-2" style="line-height: 1;">${user.following}</p>
          </div>
          
        </div>

        <!-- extra infos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-sm md:text-base mt-2">
          <div class="flex items-center gap-4 bg-white p-3 border-4 border-black shadow-neo-sm hover:bg-gray-50">
            <div class="bg-black text-white w-8 h-8 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span class="break-words flex-1 leading-normal pb-0.5">${location}</span>
          </div>
          
          <div class="flex items-center gap-4 bg-white p-3 border-4 border-black shadow-neo-sm hover:bg-gray-50">
             <div class="bg-black text-white w-8 h-8 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            <div class="break-words flex-1 leading-normal pb-0.5">${blogLinkHTML}</div>
          </div>
          
          <div class="flex items-center gap-4 bg-white p-3 border-4 border-black shadow-neo-sm md:col-span-2 hover:bg-gray-50">
            <div class="bg-black text-white w-8 h-8 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
            <span class="break-words flex-1 leading-normal pb-0.5">Bergabung sejak: ${joinedDate}</span>
          </div>
        </div>

      </div>
    </div>
    </div>
  `;
};