import { render, screen } from "@testing-library/react"
import Home from "../../pages"
import { useSession } from "next-auth/react";

jest.mock('next-auth/react');

describe('Home page', ()=> {
    it('renders correctly', ()=> {

        const useSessionMocked = jest.mocked(useSession);

        useSessionMocked.mockReturnValueOnce({
            data: null,
            status: 'unauthenticated',
        })

        render(<Home product={{priceId: 'fake-price-id', amount: 'R$10,00'}} />);

        expect(screen.getByText('for R$10,00 month')).toBeInTheDocument();
    })
})