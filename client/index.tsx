import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './components/App.tsx'
import Header from './components/header.tsx'
import { ImageUpload } from './components/ImageUpload.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <Header />
      <App />
      <ImageUpload />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
