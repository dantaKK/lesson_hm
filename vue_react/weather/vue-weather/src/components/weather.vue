<template>
    <div class="container">
      <!-- 导航 -->
      <!-- html5 语义化标签 -->
      <nav class="nav">
        <div class="time">{{localTime}}</div>
        <div class="city">切换城市</div>
      </nav>
      <main class="city-info">
        <div class="city-name">{{weatherData.city}}</div>
        <div class="weather">{{weatherData.weather}}</div>
        <h2 class="temp">
          <em>{{weatherData.temperature}}</em>C
        </h2>
        <div class="detail">
          <span>风力: {{weatherData.windPower}}级</span>
          <span>风向: {{weatherData.windDirection}}</span>
          <span>空气湿度: {{weatherData.humidity}}</span>
        </div>
      </main>
      <!-- 天气 -->
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
         .container {
    min-height: 100vh;
    background-color:black ;
    opacity: 0.6;
    color: #fff;
    }
    .nav{
        overflow: auto;
        padding: 10px;
    }
    .city{
        float: right;
    }
    .time{
        float: left;
    }
  </style>