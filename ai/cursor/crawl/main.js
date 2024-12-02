const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

// 目标URL
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送HTTP请求并解析HTML
request(url)
    .then(html => {
        // 使用cheerio加载HTML
        const $ = cheerio.load(html);

        // 找到包含热榜数据的表格
        const tableRows = $('#nKqndgxeLl9 > table > tbody > tr');

        // 存储热榜数据的数组
        const hotList = [];

        // 遍历每一行，提取数据
        tableRows.each((index, element) => {
            const rank = $(element).find('td:nth-child(1)').text().trim();
            const title = $(element).find('td:nth-child(2) > a').text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = 'https://tophub.today' + $(element).find('td:nth-child(2) > a').attr('href');

            // 将数据添加到数组中
            hotList.push({ rank, title, heat, link });
        });

        // 将数据保存到CSV文件
        const csv = hotList.map(item => `${item.rank},${item.title},${item.heat},${item.link}`).join('\n');
        fs.writeFileSync('hotlist.csv', csv, 'utf8');

        console.log('数据已成功保存到 hotlist.csv 文件中');
    })
    .catch(err => {
        console.error('请求失败:', err);
    });