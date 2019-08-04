# vue-plugin-use-router
use vue-router like vue 3.0 api

### require

vue-router

### install

```javascript
Vue.use('vue-router').use('vue-plugin-use-router')
```

### usage

```javascript
import { useRouter } from 'vue-plugin-use-router'

const { router, route } = useRouter()

router.push('/a/b')

console.log(route.params.id)
console.log(route.query.channel)
```



