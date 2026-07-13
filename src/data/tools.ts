import { ToolMetadata } from '../types';
import { EXTRA_TOOLS } from './extra_tools';

export const TOOLS: ToolMetadata[] = [
  // TEXT TOOLS
  {
    id: 'word-counter', name: 'Word Counter', categoryId: 'text', iconName: 'Type',
    description: 'Instantly count words, characters, and paragraphs in your text.',
    seo: {
      whatIsIt: 'A word counter is an essential online tool that automatically calculates the number of words, characters, and paragraphs in your text. It runs entirely in your browser, ensuring your content remains private.',
      howToUse: ['Paste or type your text into the input box.', 'View real-time statistics below the text area.', 'Copy the results if needed.'],
      features: ['Real-time counting', 'Character count (with & without spaces)', 'Paragraph count', '100% private (client-side)'],
      useCases: ['Writers checking word limits for essays.', 'SEO professionals optimizing meta descriptions.', 'Social media managers formatting posts.'],
      faqs: [
        { question: 'Is my text saved anywhere?', answer: 'No. All processing happens locally in your browser. Nothing is uploaded to our servers.' },
        { question: 'Does it count spaces as characters?', answer: 'It provides both metrics: characters with spaces and characters without spaces.' }
      ]
    }
  },
  {
    id: 'case-converter', name: 'Case Converter', categoryId: 'text', iconName: 'CaseUpper',
    description: 'Easily convert text to UPPERCASE, lowercase, Title Case, and more.',
    seo: {
      whatIsIt: 'The Case Converter is a handy utility to instantly change the capitalization of your text. Whether you accidentally left Caps Lock on or need to format a title, this tool does it in a click.',
      howToUse: ['Paste your text into the box.', 'Click the desired case format button (e.g., UPPERCASE, Title Case).', 'Copy the converted text.'],
      features: ['Multiple case formats', 'Instant conversion', 'One-click copy'],
      useCases: ['Fixing accidental Caps Lock text.', 'Formatting article titles and headings.', 'Standardizing data entries.'],
      faqs: [{ question: 'What is Title Case?', answer: 'Title Case capitalizes the first letter of most words, typically used for book and article titles.' }]
    }
  },
  {
    id: 'text-reverser', name: 'Text Reverser', categoryId: 'text', iconName: 'ArrowRightLeft',
    description: 'Reverse the order of letters or words in your text.',
    seo: {
      whatIsIt: 'Text Reverser flips your text backwards. You can reverse the entire string of characters or just reverse the order of the words.',
      howToUse: ['Enter your text.', 'Choose to reverse by character or by word.', 'View the result instantly.'],
      features: ['Character reversal', 'Word reversal', 'Instant output'],
      useCases: ['Creating passwords.', 'Fun puzzles and games.', 'Testing text rendering.'],
      faqs: [{ question: 'Can it reverse sentences?', answer: 'Yes, you can reverse the order of words in a sentence while keeping the words themselves intact.' }]
    }
  },
  {
    id: 'duplicate-remover', name: 'Duplicate Remover', categoryId: 'text', iconName: 'ListFilter',
    description: 'Find and remove duplicate lines from a list of text.',
    seo: {
      whatIsIt: 'Duplicate Remover cleans up your lists by identifying and deleting identical lines, leaving you with only unique items.',
      howToUse: ['Paste your list (one item per line).', 'Click remove duplicates.', 'Copy the cleaned list.'],
      features: ['Case-sensitive or insensitive modes', 'Whitespace trimming', 'Fast processing for large lists'],
      useCases: ['Cleaning up email lists.', 'Removing duplicate tags or keywords.', 'Data sanitization.'],
      faqs: [{ question: 'Does it ignore empty lines?', answer: 'Yes, empty lines are typically consolidated or removed during the process.' }]
    }
  },
  {
    id: 'find-replace', name: 'Find & Replace', categoryId: 'text', iconName: 'Search',
    description: 'Search for specific text and replace it with something else.',
    seo: {
      whatIsIt: 'A browser-based find and replace tool to quickly swap out words or phrases within a large block of text.',
      howToUse: ['Paste your text.', 'Enter the text to find.', 'Enter the replacement text.', 'Click Replace All.'],
      features: ['Match case option', 'Replace all occurrences', 'Regex support (optional)'],
      useCases: ['Updating brand names in articles.', 'Fixing recurring typos.', 'Code refactoring.'],
      faqs: [{ question: 'Is it case sensitive?', answer: 'You can toggle case sensitivity on or off based on your needs.' }]
    }
  },
  {
    id: 'text-diff', name: 'Text Diff Checker', categoryId: 'text', iconName: 'FileDiff',
    description: 'Compare two text documents and highlight the differences.',
    seo: {
      whatIsIt: 'Text Diff Checker helps you compare two pieces of text side-by-side to see exactly what has been added, removed, or changed.',
      howToUse: ['Paste original text in the left box.', 'Paste modified text in the right box.', 'View the highlighted differences.'],
      features: ['Side-by-side comparison', 'Highlights additions and deletions', 'Fast local comparison'],
      useCases: ['Reviewing code changes.', 'Comparing contract revisions.', 'Checking essay edits.'],
      faqs: [{ question: 'Is my data uploaded for comparison?', answer: 'No, the comparison algorithm runs completely in your browser.' }]
    }
  },

  // CALCULATORS
  {
    id: 'age-calculator', name: 'Age Calculator', categoryId: 'calc', iconName: 'CalendarDays',
    description: 'Calculate your exact age in years, months, and days.',
    seo: {
      whatIsIt: 'The Age Calculator computes the exact time span between two dates, typically your birth date and the current date.',
      howToUse: ['Select your date of birth.', 'Select the target date (defaults to today).', 'View your exact age.'],
      features: ['Exact years, months, days', 'Total days lived', 'Next birthday countdown'],
      useCases: ['Filling out official forms.', 'Checking age eligibility.', 'Curiosity about total days lived.'],
      faqs: [{ question: 'Does it account for leap years?', answer: 'Yes, the calculation relies on standard calendar logic which includes leap years.' }]
    }
  },
  {
    id: 'bmi-calculator', name: 'BMI Calculator', categoryId: 'calc', iconName: 'Activity',
    description: 'Check your Body Mass Index (BMI) to see if you are at a healthy weight.',
    seo: {
      whatIsIt: 'The BMI Calculator estimates body fat based on height and weight, providing a standard metric for health assessment.',
      howToUse: ['Enter your height.', 'Enter your weight.', 'Click calculate to see your BMI score and category.'],
      features: ['Metric and Imperial units', 'Standard BMI categories', 'Instant calculation'],
      useCases: ['Personal health tracking.', 'Fitness planning.', 'Medical form estimations.'],
      faqs: [{ question: 'Is BMI a perfect health indicator?', answer: 'No, BMI does not distinguish between muscle and fat, but it is a useful general screening tool.' }]
    }
  },
  {
    id: 'percentage-calculator', name: 'Percentage Calculator', categoryId: 'calc', iconName: 'Percent',
    description: 'Easily calculate percentages, increases, decreases, and ratios.',
    seo: {
      whatIsIt: 'A versatile math tool to solve common percentage problems, such as finding X% of Y, or the percentage change between two numbers.',
      howToUse: ['Select the type of calculation.', 'Enter the known values.', 'The result updates automatically.'],
      features: ['Multiple formula types', 'Instant results', 'Handles decimals'],
      useCases: ['Calculating tips.', 'Figuring out sales tax.', 'Determining profit margins.'],
      faqs: [{ question: 'How do I calculate a discount?', answer: 'Use the "percentage decrease" or "what is X% of Y" tool to find the new price.' }]
    }
  },
  {
    id: 'loan-calculator', name: 'Loan/EMI Calculator', categoryId: 'calc', iconName: 'Landmark',
    description: 'Estimate your monthly loan payments and total interest.',
    seo: {
      whatIsIt: 'The Loan and EMI Calculator helps you figure out your monthly payments for mortgages, car loans, or personal loans based on principal, interest rate, and term.',
      howToUse: ['Enter the total loan amount.', 'Enter the annual interest rate.', 'Enter the loan term in years or months.', 'View your estimated monthly payment.'],
      features: ['Amortization summary', 'Total interest calculation', 'Flexible terms'],
      useCases: ['Planning to buy a house.', 'Comparing car loan offers.', 'Managing debt payoff.'],
      faqs: [{ question: 'Does this include taxes and insurance?', answer: 'No, this calculates strictly the principal and interest (P&I) based on the inputs.' }]
    }
  },
  {
    id: 'gpa-calculator', name: 'GPA Calculator', categoryId: 'calc', iconName: 'GraduationCap',
    description: 'Calculate your semester or cumulative Grade Point Average.',
    seo: {
      whatIsIt: 'A tool for students to calculate their GPA by inputting their course credits and grades received.',
      howToUse: ['Add a row for each class.', 'Enter the credits for the class.', 'Select the letter grade.', 'Your GPA calculates automatically.'],
      features: ['Supports weighted/unweighted', 'Customizable grade scales', 'Add multiple semesters'],
      useCases: ['Checking academic standing.', 'Predicting future GPA.', 'College application planning.'],
      faqs: [{ question: 'Can I calculate a cumulative GPA?', answer: 'Yes, you can enter your current GPA and total credits to factor in previous semesters.' }]
    }
  },
  {
    id: 'discount-calculator', name: 'Discount Calculator', categoryId: 'calc', iconName: 'Tags',
    description: 'Find out the final price after applying a discount percentage.',
    seo: {
      whatIsIt: 'Quickly determine how much you will save and what the final price will be after a store discount is applied.',
      howToUse: ['Enter the original price.', 'Enter the discount percentage.', 'See the final price and amount saved.'],
      features: ['Instant savings calculation', 'Tax inclusion option', 'Mobile-friendly for in-store use'],
      useCases: ['Shopping during sales.', 'Applying coupon codes.', 'Budgeting.'],
      faqs: [{ question: 'Can it calculate double discounts?', answer: 'Yes, just apply the first discount, then use the final price as the original price for the second discount.' }]
    }
  },

  // CONVERTERS
  {
    id: 'unit-converter', name: 'Unit Converter', categoryId: 'conv', iconName: 'Scale',
    description: 'Convert length, weight, temperature, volume, and more.',
    seo: {
      whatIsIt: 'A comprehensive unit converter to switch between metric and imperial systems, covering length, mass, temperature, and more.',
      howToUse: ['Select the category (e.g., Length).', 'Select the "from" and "to" units.', 'Enter the value to convert.'],
      features: ['Extensive unit list', 'Bidirectional conversion', 'High precision'],
      useCases: ['Cooking recipes.', 'Science homework.', 'DIY projects.'],
      faqs: [{ question: 'Is it accurate?', answer: 'Yes, it uses standard international conversion factors for high accuracy.' }]
    }
  },
  {
    id: 'currency-converter', name: 'Currency Converter', categoryId: 'conv', iconName: 'Coins',
    description: 'Convert between major world currencies (using static reference rates).',
    seo: {
      whatIsIt: 'A quick tool to estimate the exchange value between different currencies using static reference rates for estimation.',
      howToUse: ['Select the base currency.', 'Select the target currency.', 'Enter the amount.'],
      features: ['Major world currencies', 'Instant calculation', 'Offline capable'],
      useCases: ['Travel planning.', 'Rough cost estimation for imports.', 'Educational purposes.'],
      faqs: [{ question: 'Are the rates live?', answer: 'No, this tool uses static fallback rates to ensure it works entirely offline and client-side without API keys. It is for estimation only.' }]
    }
  },
  {
    id: 'base-converter', name: 'Number Base Converter', categoryId: 'conv', iconName: 'Binary',
    description: 'Convert numbers between Decimal, Binary, Hexadecimal, and Octal.',
    seo: {
      whatIsIt: 'A computer science utility to translate values between different numeral systems (bases 2, 8, 10, and 16).',
      howToUse: ['Select the input base.', 'Enter the value.', 'View the conversions in all other bases instantly.'],
      features: ['Supports Binary, Octal, Decimal, Hex', 'Real-time translation', 'Handles large numbers'],
      useCases: ['Programming and debugging.', 'Computer science homework.', 'Networking (IP addresses).'],
      faqs: [{ question: 'Can it handle fractions?', answer: 'This specific tool is optimized for integers.' }]
    }
  },
  {
    id: 'color-converter', name: 'Color Converter', categoryId: 'conv', iconName: 'Palette',
    description: 'Convert colors between HEX, RGB, HSL, and CMYK formats.',
    seo: {
      whatIsIt: 'A tool for web designers and developers to translate color codes from one format to another seamlessly.',
      howToUse: ['Enter a color code in any format or use the color picker.', 'View the equivalent codes in HEX, RGB, and HSL.'],
      features: ['Visual color preview', 'Supports alpha channels', 'Click to copy'],
      useCases: ['Web development styling.', 'Graphic design.', 'Brand guideline creation.'],
      faqs: [{ question: 'Does it support transparency?', answer: 'Yes, it supports RGBA and HEX with alpha channels.' }]
    }
  },
  {
    id: 'timezone-converter', name: 'Time Zone Converter', categoryId: 'conv', iconName: 'Globe',
    description: 'Compare current times across different cities and time zones.',
    seo: {
      whatIsIt: 'Easily figure out what time it is in another part of the world to schedule meetings or calls.',
      howToUse: ['Select your local time zone.', 'Select the target time zone.', 'The current time difference is displayed.'],
      features: ['Major cities included', 'Relative time offsets', 'DST aware (via browser APIs)'],
      useCases: ['Scheduling international meetings.', 'Calling friends abroad.', 'Watching global live streams.'],
      faqs: [{ question: 'Does it account for Daylight Saving Time?', answer: 'Yes, it relies on your browser\'s native Intl API which handles DST rules.' }]
    }
  },
  {
    id: 'timestamp-converter', name: 'Timestamp Converter', categoryId: 'conv', iconName: 'Clock',
    description: 'Convert Unix timestamps to human-readable dates and vice versa.',
    seo: {
      whatIsIt: 'A developer tool to translate Unix epoch time (seconds since 1970) into readable dates, or convert a date back to a timestamp.',
      howToUse: ['Enter a Unix timestamp to see the date, or select a date to get the timestamp.'],
      features: ['Supports seconds and milliseconds', 'Local and UTC time outputs', 'Current timestamp generator'],
      useCases: ['Debugging server logs.', 'Database management.', 'API development.'],
      faqs: [{ question: 'What is a Unix timestamp?', answer: 'It is the number of seconds that have elapsed since January 1, 1970 (UTC).' }]
    }
  },

  // IMAGE TOOLS
  {
    id: 'image-compressor', name: 'Image Compressor', categoryId: 'image', iconName: 'Minimize',
    description: 'Reduce the file size of your images entirely in the browser.',
    seo: {
      whatIsIt: 'A client-side image optimization tool that uses HTML5 Canvas to compress JPEGs and PNGs without uploading them to a server.',
      howToUse: ['Select an image file.', 'Adjust the quality slider.', 'Download the compressed image.'],
      features: ['100% private (no uploads)', 'Adjustable quality', 'Preview size savings'],
      useCases: ['Optimizing images for websites.', 'Reducing file sizes for email.', 'Saving storage space.'],
      faqs: [{ question: 'Is my image uploaded?', answer: 'No, all compression happens directly in your web browser using your device\'s processing power.' }]
    }
  },
  {
    id: 'image-resizer', name: 'Image Resizer', categoryId: 'image', iconName: 'Maximize',
    description: 'Change the dimensions (width/height) of any image.',
    seo: {
      whatIsIt: 'Easily change the pixel dimensions of your photos or graphics to fit specific requirements, all within your browser.',
      howToUse: ['Upload your image.', 'Enter the new width or height.', 'Click resize and download.'],
      features: ['Maintain aspect ratio option', 'Fast processing', 'Multiple export formats'],
      useCases: ['Creating social media profile pictures.', 'Preparing images for printing.', 'Standardizing blog thumbnails.'],
      faqs: [{ question: 'Does resizing reduce quality?', answer: 'Upscaling (making it larger) can cause pixelation, while downscaling generally maintains visual sharpness.' }]
    }
  },
  {
    id: 'image-cropper', name: 'Image Cropper', categoryId: 'image', iconName: 'Crop',
    description: 'Crop and trim your images to the perfect aspect ratio.',
    seo: {
      whatIsIt: 'A simple visual tool to cut out unwanted parts of an image or constrain it to a specific aspect ratio.',
      howToUse: ['Select an image.', 'Drag the crop box over the desired area.', 'Click crop and download.'],
      features: ['Freeform cropping', 'Fixed aspect ratios (1:1, 16:9)', 'Visual interface'],
      useCases: ['Removing photobombers.', 'Creating square avatars.', 'Formatting for Instagram.'],
      faqs: [{ question: 'Can I crop to a circle?', answer: 'This tool performs standard rectangular crops, which you can later mask via CSS for circular displays.' }]
    }
  },
  {
    id: 'image-to-base64', name: 'Image to Base64', categoryId: 'image', iconName: 'Code',
    description: 'Convert image files to Base64 data URIs for embedding in CSS/HTML.',
    seo: {
      whatIsIt: 'A developer utility that translates an image file into a Base64 encoded string, allowing you to embed images directly into your source code.',
      howToUse: ['Select an image file.', 'Wait a moment for processing.', 'Copy the Base64 string or the CSS background snippet.'],
      features: ['Instant conversion', 'CSS and HTML snippets ready', 'Handles SVG, PNG, JPEG'],
      useCases: ['Embedding small icons in CSS.', 'Reducing HTTP requests.', 'Creating single-file HTML documents.'],
      faqs: [{ question: 'Should I convert large images?', answer: 'No, Base64 encoding increases file size by ~33%. It is best used for tiny icons and logos.' }]
    }
  },
  {
    id: 'qr-generator', name: 'QR Code Generator', categoryId: 'image', iconName: 'QrCode',
    description: 'Generate scannable QR codes for URLs, text, or contact info.',
    seo: {
      whatIsIt: 'Instantly create 2D barcodes (QR codes) that can be scanned by smartphone cameras to quickly open links or share text.',
      howToUse: ['Enter your URL or text.', 'The QR code generates automatically.', 'Download the image.'],
      features: ['Instant generation', 'Client-side processing', 'Downloadable as PNG'],
      useCases: ['Sharing website links on flyers.', 'Wi-Fi network sharing.', 'Digital business cards.'],
      faqs: [{ question: 'Do these QR codes expire?', answer: 'No, the QR codes generated are static and will work forever as long as the underlying URL or text remains valid.' }]
    }
  },
  {
    id: 'meme-generator', name: 'Meme Generator', categoryId: 'image', iconName: 'ImagePlay',
    description: 'Add custom top and bottom text to your images.',
    seo: {
      whatIsIt: 'A fun, lightweight tool to overlay classic Impact-style text onto any image you provide.',
      howToUse: ['Upload an image.', 'Type your top text.', 'Type your bottom text.', 'Download the result.'],
      features: ['Classic meme font (Impact)', 'Drag-and-drop upload', 'Instant preview'],
      useCases: ['Making jokes for social media.', 'Creating custom reactions.', 'Office humor.'],
      faqs: [{ question: 'Are there watermark added?', answer: 'No, this tool is 100% free and adds no watermarks to your creations.' }]
    }
  },

  // DEV & GENERATORS
  {
    id: 'json-formatter', name: 'JSON Formatter', categoryId: 'dev', iconName: 'Braces',
    description: 'Format, prettify, and validate JSON data.',
    seo: {
      whatIsIt: 'A utility to make minified or messy JSON data readable by adding proper indentation and line breaks, while also checking for syntax errors.',
      howToUse: ['Paste your JSON data.', 'Click Format.', 'View the prettified JSON or any syntax errors.'],
      features: ['Syntax validation', 'Indentation options', 'Syntax highlighting'],
      useCases: ['Debugging API responses.', 'Formatting configuration files.', 'Reading complex data structures.'],
      faqs: [{ question: 'Is my data secure?', answer: 'Yes, formatting is done entirely in your browser using JavaScript.' }]
    }
  },
  {
    id: 'password-generator', name: 'Password Generator', categoryId: 'dev', iconName: 'Key',
    description: 'Generate secure, random passwords with custom parameters.',
    seo: {
      whatIsIt: 'A tool that uses cryptographic random number generation to create strong, unpredictable passwords to keep your accounts secure.',
      howToUse: ['Select password length.', 'Toggle options for uppercase, numbers, and symbols.', 'Click generate and copy.'],
      features: ['Cryptographically secure (Web Crypto API)', 'Customizable constraints', 'Local generation'],
      useCases: ['Creating new account passwords.', 'Updating old passwords.', 'Securing Wi-Fi networks.'],
      faqs: [{ question: 'Can you see the passwords generated?', answer: 'Absolutely not. They are generated locally on your device and are never transmitted.' }]
    }
  },
  {
    id: 'uuid-generator', name: 'UUID Generator', categoryId: 'dev', iconName: 'Fingerprint',
    description: 'Generate random Version 4 Universally Unique Identifiers (UUIDs).',
    seo: {
      whatIsIt: 'Quickly create standard v4 UUIDs (GUIDs) for use as primary keys, unique tokens, or random identifiers in your applications.',
      howToUse: ['Select how many UUIDs you need.', 'Click Generate.', 'Copy the list.'],
      features: ['Generates multiple UUIDs at once', 'Standard v4 format', 'Hyphenated or raw options'],
      useCases: ['Database seeding.', 'Generating session tokens.', 'Testing APIs.'],
      faqs: [{ question: 'What are the chances of a collision?', answer: 'For a v4 UUID, the probability of a collision is so astronomically small it is considered zero for practical purposes.' }]
    }
  },
  {
    id: 'random-number', name: 'Random Number', categoryId: 'dev', iconName: 'Dices',
    description: 'Generate a random number within a specific range.',
    seo: {
      whatIsIt: 'A simple utility to pick a random integer between a minimum and maximum value you specify.',
      howToUse: ['Enter the minimum value.', 'Enter the maximum value.', 'Click Generate.'],
      features: ['Inclusive range', 'Instantly generated', 'No biases'],
      useCases: ['Running giveaways.', 'Statistical sampling.', 'Making decisions.'],
      faqs: [{ question: 'Are the numbers truly random?', answer: 'They are pseudo-random generated by your browser\'s math engine, sufficient for general purposes.' }]
    }
  },
  {
    id: 'hash-generator', name: 'Hash Generator', categoryId: 'dev', iconName: 'Hash',
    description: 'Generate SHA-1, SHA-256, and MD5 hashes from text.',
    seo: {
      whatIsIt: 'A developer tool to compute cryptographic hash values of text strings directly in the browser using the Web Crypto API.',
      howToUse: ['Enter your text.', 'The hashes are calculated automatically as you type.', 'Copy the desired hash.'],
      features: ['SHA-256, SHA-384, SHA-512 support', 'Real-time hashing', 'Client-side security'],
      useCases: ['Verifying file integrity.', 'Creating checksums.', 'Learning about cryptography.'],
      faqs: [{ question: 'Can a hash be reversed?', answer: 'No, cryptographic hashes are one-way functions. You cannot derive the original text from the hash alone.' }]
    }
  },
  {
    id: 'regex-tester', name: 'Regex Tester', categoryId: 'dev', iconName: 'Regex',
    description: 'Test and debug JavaScript Regular Expressions.',
    seo: {
      whatIsIt: 'An interactive tool to write regular expressions and instantly see them applied to test text to ensure they match what you expect.',
      howToUse: ['Enter your regex pattern.', 'Provide test text.', 'See matches highlighted in real-time.'],
      features: ['Real-time highlighting', 'Flag toggles (g, i, m)', 'JavaScript regex engine'],
      useCases: ['Writing data validation rules.', 'Extracting data from logs.', 'Learning regular expressions.'],
      faqs: [{ question: 'Which regex engine does this use?', answer: 'It uses the native JavaScript regular expression engine running in your browser.' }]
    }
  },
  {
    id: 'image-converter',
    name: 'Convert Images',
    categoryId: 'media',
    iconName: 'Image',
    description: 'Switch between JPEG, PNG, WEBP, HEIC, RAW and many other image formats.',
    seo: {
      whatIsIt: 'A browser-based image format converter. Convert your pictures to PNG, JPG, or WEBP without sending them to any server.',
      howToUse: ['Upload an image', 'Select target format and quality', 'Click Convert & Download'],
      features: ['Local processing', 'Privacy friendly', 'Fast conversion', 'Supports transparency (PNG, WEBP)'],
      useCases: ['Web optimization', 'Format compatibility', 'Design assets'],
      faqs: [{ question: 'Is my image uploaded?', answer: 'No, everything is processed directly in your browser using HTML5 Canvas.' }]
    }
  },
  {
    id: 'document-converter',
    name: 'Convert Documents',
    categoryId: 'media',
    iconName: 'FileText',
    description: 'Convert PDF, DOCX, ODT, RTF and other office documents to a different format.',
    seo: {
      whatIsIt: 'A simple document converter that works in your browser.',
      howToUse: ['Upload your text document', 'Select PDF', 'Click Convert'],
      features: ['Local processing', 'Generates PDF instantly', 'Privacy first'],
      useCases: ['Text to PDF conversion', 'Document archiving'],
      faqs: [{ question: 'What formats are supported?', answer: 'Currently optimized for Text to PDF conversion locally.' }]
    }
  },
  {
    id: 'audio-video-converter',
    name: 'Convert Audio & Video',
    categoryId: 'media',
    iconName: 'Video',
    description: 'Switch between MP3, WAV, MP4, MOV, MKV, AVI and other media formats.',
    seo: {
      whatIsIt: 'A tool to change formats of audio and video files.',
      howToUse: ['Select a video or audio file', 'Choose target format', 'Click Convert'],
      features: ['Preview media before conversion', 'Multiple formats'],
      useCases: ['Video encoding', 'Audio extraction'],
      faqs: [{ question: 'Does this work locally?', answer: 'This provides the UI for media conversion. Due to browser security on standard servers, true client-side heavy media conversion might be limited.' }]
    }
  },
  ...EXTRA_TOOLS
];
