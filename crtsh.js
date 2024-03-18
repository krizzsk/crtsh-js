(() => {
  
  const rows = document.querySelectorAll('table tr');

  
  const domainNames = Array.from(rows).slice(1).map(row => {
    const cells = Array.from(row.querySelectorAll('td'));
  
    return cells[cells.length - 3] ? cells[cells.length - 3].textContent : null;
  }).filter(name => name); // Removes any nulls, in case there are rows with missing cells

 
  const data = domainNames.join('\n');

 
  const blob = new Blob([data], { type: 'text/plain' });

  
  const url = URL.createObjectURL(blob);


  const a = document.createElement('a');

  a.download = 'domain-names.txt';

  a.href = url;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
})();
