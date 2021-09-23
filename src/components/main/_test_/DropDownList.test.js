import { render, screen } from '@testing-library/react';
import DropDownList from '../DropDownList';

test('dropdown tests', () => {
    render(<DropDownList />);
    const linkElement = screen.getByTestId(/dropdown-test/i);
    
    expect(linkElement).toBeInTheDocument();
});;
