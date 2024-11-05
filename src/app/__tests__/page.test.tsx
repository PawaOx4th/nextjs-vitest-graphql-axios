import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import apiServices from '@/app/components/test/queryClient'

 
// test('Page', () => {
//   render(<Page />)
//   expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
// })

test('should run',async  () => { 
    const res = await apiServices.query({
      countries : {
        code: true
      }
    })

    console.log(`[LOG] 🟡  res :`, res)
 })