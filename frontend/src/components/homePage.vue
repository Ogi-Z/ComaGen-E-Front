<template>
    <div class="home-container">
      <h1>Information About Platform</h1>
      <p>This is the home page for the TermProject. Here you can find information about the platform and its features.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
 .home-container {
  width: 100%; /* Konteynır genişliği tam sayfa */
  height: 100%; /* Konteynır yüksekliği tam sayfa */
  padding: 20px 50px; /* İç boşluk */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; /* İçerikleri dikey olarak ortala */
  align-items: center; /* İçerikleri yatay olarak ortala */
  background-color: white;
}
  
  h1 {
    color: #333;
    font-family: 'Times New Roman', serif; /* Times New Roman fontu */
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
    font-family: 'Times New Roman', serif; /* Times New Roman fontu */
    font-size: 16px;
    line-height: 1.6;
  }
  </style>
  