//Making website url

export function createWebsiteUrl(domain = ''){

  return domain.startsWith('http') ? domain : `https://${domain}`;
}

//Formatting date

export function formatDate(dateString = ''){
  const date = new Date(dateString);
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', {month:'short'});
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}


//Initializing theme

export function initializeTheme(){ 
    let savedTheme = localStorage.getItem('theme');
   
    if(savedTheme === 'dark'){
      return "dark";
    }
    else if(savedTheme === 'light'){
      return 'light';
    }
    else{
    let isDark =  window.matchMedia('(prefers-color-scheme: dark)').matches;
     
    if(isDark) return 'dark';
    
    return 'light';
    }
}

