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