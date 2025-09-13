<template>
  <div class="dashboard-page">
    <header class="dashboard-header">
      <h1>ダッシュボード</h1>
      <div class="header-actions">
        <span class="welcome-text">ようこそ、{{ userName }}さん</span>
        <BaseButton
          variant="secondary"
          size="small"
          @click="handleLogout"
        >
          ログアウト
        </BaseButton>
      </div>
    </header>
    
    <main class="dashboard-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>今日のユーザー</h3>
          <p class="stat-number">{{ todayUsers }}</p>
          <span class="stat-date">{{ formattedToday }}</span>
        </div>
        
        <div class="stat-card">
          <h3>アクティブユーザー</h3>
          <p class="stat-number">{{ activeUsers }}</p>
          <span class="stat-time">{{ lastUpdated }}</span>
        </div>
        
        <div class="stat-card">
          <h3>総売上</h3>
          <p class="stat-number">¥{{ totalSales.toLocaleString() }}</p>
          <span class="stat-change positive">+12% 前月比</span>
        </div>
      </div>
      
      <div class="recent-activity">
        <h2>最近の活動</h2>
        <div class="activity-list">
          <div 
            v-for="activity in recentActivities" 
            :key="activity.id"
            class="activity-item"
          >
            <span class="activity-time">{{ activity.timeAgo }}</span>
            <span class="activity-description">{{ activity.description }}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { BaseButton } from '@frobnitz/controls'
import { formatDate, getRelativeTime } from '@frobnitz/common'

interface Activity {
  id: string
  description: string
  timestamp: Date
  timeAgo: string
}

interface Emits {
  logout: []
}

withDefaults(defineProps<{
  userName?: string
}>(), {
  userName: 'ユーザー'
})

const emit = defineEmits<Emits>()

const todayUsers = ref(1247)
const activeUsers = ref(89)
const totalSales = ref(2456780)

const recentActivities = ref<Activity[]>([
  {
    id: '1',
    description: '新しいユーザーが登録しました',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    timeAgo: ''
  },
  {
    id: '2',
    description: '商品が更新されました',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    timeAgo: ''
  },
  {
    id: '3',
    description: 'システムメンテナンスが完了しました',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    timeAgo: ''
  }
])

const formattedToday = computed(() => {
  return formatDate(new Date(), 'ja-JP')
})

const lastUpdated = computed(() => {
  return getRelativeTime(new Date(Date.now() - 1000 * 60 * 3), 'ja-JP')
})

const handleLogout = () => {
  emit('logout')
}

onMounted(() => {
  // Update relative times
  recentActivities.value.forEach(activity => {
    activity.timeAgo = getRelativeTime(activity.timestamp, 'ja-JP')
  })
})
</script>

<style scoped>
.dashboard-page {
  padding: 1rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-header h1 {
  margin: 0;
  color: #333;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.welcome-text {
  color: #666;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
  font-weight: normal;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.stat-date,
.stat-time {
  font-size: 0.8rem;
  color: #999;
}

.stat-change {
  font-size: 0.8rem;
  font-weight: 500;
}

.stat-change.positive {
  color: #28a745;
}

.recent-activity {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recent-activity h2 {
  margin: 0 0 1rem 0;
  color: #333;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.activity-time {
  font-size: 0.8rem;
  color: #666;
  min-width: 80px;
}

.activity-description {
  flex: 1;
  margin-left: 1rem;
}
</style>