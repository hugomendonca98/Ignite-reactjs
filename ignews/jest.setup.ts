import '@testing-library/jest-dom';

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/',
                route: '/',
                pathname: '/',
                query: '',
                push: jest.fn(),
                replace: jest.fn(),
            };
        },
    };
});