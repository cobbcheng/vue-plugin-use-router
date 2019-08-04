# vue-plugin-use-router
use vue-router like vue 3.0 api

### require

vue-router

### install

```javascript
import { plugin } from 'vue-plugin-use-router'

Vue.use('vue-router').use(plugin)
```

### usage

```javascript
import { useRouter } from 'vue-plugin-use-router'

const { router, route } = useRouter()

router.push('/a/b')

console.log(route.params.id)
console.log(route.query.channel)
```

### tips

not publish on npm

