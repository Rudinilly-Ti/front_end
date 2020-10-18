import React from 'react';

import { render, waitForElement } from '@testing-library/react';

import MainPage from './';

describe('Teste Pagina principal', () => {
  it('deve renderizar a pagina corretamente', async () => {
    const { getByTestId } = render(<MainPage />)

    const renderizar = await waitForElement(() => getByTestId('form-field'))

    console.log(renderizar)
  })
})