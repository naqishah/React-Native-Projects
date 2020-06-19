import  axios  from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer e_oLDoNkc7gvm2c1PZ8geEEpv0WktT0fa0T8s1hizJQHFVOOOXzvoXLZA3AOZI6lWpo3CFOrECiSB3MehCzE5g9gNfQGIzJZScPe9veJGKWkAtMcLb36FW8HW0yvXnYx'
    }
});