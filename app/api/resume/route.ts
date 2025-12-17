import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    // Path to the resume file in the public directory
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Resume not found', { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Return the file with proper headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Hariharan_Chandrasekar_resume.pdf"',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error downloading resume:', error);
    return new NextResponse('Error downloading resume', { status: 500 });
  }
}

