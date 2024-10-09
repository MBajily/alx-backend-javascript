// Define branded types for credits
interface MajorCredits {
    credits: number;
    readonly _brand: 'MajorCredits'; // Brand property for nominal typing
}

interface MinorCredits {
    credits: number;
    readonly _brand: 'MinorCredits'; // Brand property for nominal typing
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MajorCredits',
    };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MinorCredits',
    };
}

// Example usage:
const subject1Major: MajorCredits = {
    credits: 3,
    _brand: 'MajorCredits',
};

const subject2Major: MajorCredits = {
    credits: 4,
    _brand: 'MajorCredits',
};

const subject1Minor: MinorCredits = {
    credits: 1,
    _brand: 'MinorCredits',
};

const subject2Minor: MinorCredits = {
    credits: 2,
    _brand: 'MinorCredits',
};

const majorResult = sumMajorCredits(subject1Major, subject2Major);
const minorResult = sumMinorCredits(subject1Minor, subject2Minor);

console.log(majorResult); // { credits: 7, _brand: 'MajorCredits' }
console.log(minorResult); // { credits: 3, _brand: 'MinorCredits' }

// Export types and functions
export {
    MajorCredits,
    MinorCredits,
    sumMajorCredits,
    sumMinorCredits,
};
