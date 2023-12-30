import { render, screen } from "@testing-library/react"

import SigninButton from "./SigninButton"
import { useSession } from 'next-auth/react';


jest.mock('next-auth/react')

describe('SigninButton component', () => {
    it('renders correctly when user is not authenticated', () => {

        const useSessionMocked =  jest.mocked(useSession);

        useSessionMocked.mockReturnValueOnce({
            data: null,
            status: 'unauthenticated'
        })

        render(
            <SigninButton />
        )

        expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
    })

    it('renders correctly when user is authenticated', () => {

        const useSessionMocked = jest.mocked(useSession);

        useSessionMocked.mockReturnValueOnce({
            data: {
                user: {
                    name: 'John Doe',
                    email: 'johndoe@example.com'
                },
                expires: 'fake-expires',
                activeSubscription: null,
            },
            status: 'authenticated'
        })

        render(
            <SigninButton />
        )

        expect(screen.getByText('John Doe')).toBeInTheDocument();
    })
})