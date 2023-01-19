window.onload = async () => {
  const req = await fetch(process.env.API_URL, {
    method: 'POST',
  });
  const res = await req.json();
  const { visitor_count } = res.Attributes;
  document.getElementById('visitor_count').textContent = visitor_count;
  const loader = document.getElementById('loader');
  loader.style.display = loader.style.display === '' ? 'none' : '';
};
