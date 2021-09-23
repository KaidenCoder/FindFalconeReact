import { render, screen } from '@testing-library/react';
import FindFalcon from '../FindFalcon';



test('findfalcon tests', () => {
    render(<FindFalcon />);
    const linkElement = screen.getByTestId(/findfalcon/i);
    
    expect(linkElement).toBeInTheDocument();
});;
