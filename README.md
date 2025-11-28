\documentclass[11pt, a4paper]{article}

% --- UNIVERSAL PREAMBLE BLOCK ---
\usepackage[a4paper, top=2.5cm, bottom=2.5cm, left=2cm, right=2cm]{geometry}
\usepackage{fontspec}

\usepackage[english, bidi=basic, provide=*]{babel}
\babelprovide[import, onchar=ids fonts]{english}
\babelfont{rm}{Noto Sans}

% Packages for tables and symbols
\usepackage{tabularx}
\usepackage{booktabs}
\usepackage{array}
\usepackage{amssymb} % <-- ADDED to define \checkmark

% Must be the last package loaded
\usepackage{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    filecolor=magenta,      
    urlcolor=cyan,
    pdftitle={Aura AI Landing Page Readme},
    pdfpagemode=FullScreen,
}
% --- END UNIVERSAL PREAMBLE BLOCK ---

\begin{document}

\title{\Huge Aura AI: Intelligence Layer for Code}
\author{Responsive Landing Page Documentation}
\date{}
\maketitle

\hrule

\section*{\Huge $\rho$ Aura AI: Intelligence Layer for Code (Responsive Landing Page)}

This project is a single-page responsive landing page for "Aura AI," a fictional AI-powered coding assistant, built as part of a Front-End Development assignment. It demonstrates proficiency in modern component-based architecture and utility-first CSS styling.

\hrule
\vspace{0.5cm}

\section*{\large \quad \textnormal{\textbf{Live Demo}}}

You can view the live, deployed version of the landing page here:

\texttt{\url{[Insert Your Vercel Deployment Link Here]}}

\vspace{0.5cm}
\hrule
\vspace{0.5cm}

\section*{\large \quad \textnormal{\textbf{Assignment Fulfillment}}}

This project successfully implements all the requirements specified in the assignment prompt:

\begin{center}
% Switched from longtable to a simpler tabular environment and fixed column widths
\begin{tabular}{| >{\raggedright\arraybackslash}p{3.5cm} | >{\centering\arraybackslash}p{2.5cm} | >{\raggedright\arraybackslash}p{7cm} |}
    \caption{Assignment Requirements Status} \\
    \toprule
    \textbf{Requirement} & \textbf{Status} & \textbf{Details} \\
    \midrule
    \textbf{Tech Stack} & $\checkmark$ COMPLETE & Built using \textbf{Next.js} and styled with \textbf{Tailwind CSS}. \\ 
    \textbf{UI Generation} & $\checkmark$ COMPLETE & UI components (Hero, Features, Pricing) were generated or inspired by \textbf{Vercel v0} principles. \\ 
    \textbf{Responsiveness} & $\checkmark$ COMPLETE & Layout is fully responsive, optimized for mobile (small screens) and desktop (large screens). \\ 
    \textbf{Hero Section} & $\checkmark$ COMPLETE & Includes Heading, Subtext, and two Call-to-Action (CTA) buttons. \\ 
    \textbf{Features Section} & $\checkmark$ COMPLETE & Includes a minimum of $3$ detailed features (Refactoring, Debugging, Language Support). \\ 
    \textbf{Optional Section} & $\checkmark$ COMPLETE & The \textbf{Pricing Section} was implemented as the required optional section. \\ 
    \textbf{Footer} & $\checkmark$ COMPLETE & A clean, functional footer is included at the bottom of the page. \\ 
    \bottomrule
\end{tabular}
\end{center}

\vspace{0.5cm}
\hrule
\vspace{0.5cm}

\section*{\large \quad \textnormal{\textbf{Tech Stack}}}

\begin{itemize}
    \item \textbf{Framework:} \href{https://nextjs.org/}{Next.js} (App Router structure)
    \item \textbf{Styling:} \href{https://tailwindcss.com/}{Tailwind CSS} (v$4$+)
    \item \textbf{Component Base:} \href{https://v0.dev/}{Vercel v0} (Used for initial UI generation and inspiration)
    \item \textbf{Icons:} \href{https://lucide.dev/icons/}{Lucide React}
    \item \textbf{Utilities:} \texttt{clsx} and \texttt{tailwind-merge} for clean class management.
\end{itemize}

\vspace{0.5cm}
\hrule
\vspace{0.5cm}

\section*{\large \quad \textnormal{\textbf{Local Development Setup}}}

Follow these steps to clone and run the project on your local machine.

\subsection*{Prerequisites}
You need to have \textbf{Node.js} (version $18$+) installed.

\subsection*{Installation Steps}
\begin{enumerate}
    \item \textbf{Clone the Repository:}
    \begin{verbatim}
git clone [Your Repository URL Here]
cd [your-project-folder-name]
    \end{verbatim}
    
    \item \textbf{Install Dependencies:}
    This project requires standard Next.js dependencies plus the essential utilities for the Vercel v0/shadcn component style:
    \begin{verbatim}
npm install
# or
yarn install
    \end{verbatim}

    \item \textbf{Run the Development Server:}
    \begin{verbatim}
npm run dev
# or
yarn dev
    \end{verbatim}

    \item \textbf{View the App:}
    Open \href{http://localhost:3000}{\texttt{http://localhost:3000}} in your browser to view the landing page.
    
    \textit{(Note: The application uses Turbopack, which may take a few moments to start the first time.)}
\end{enumerate}

\vspace{0.5cm}
\hrule
\vspace{0.5cm}

\section*{\large \quad \textnormal{\textbf{Project Structure Summary}}}

The entire landing page is consolidated into a single component for simplicity and adherence to the single-file concept demonstrated in the development process:

\begin{center}
\begin{tabularx}{\textwidth}{l X}
    \toprule
    \textbf{File} & \textbf{Purpose} \\
    \midrule
    \texttt{app/page.js} & \textbf{Main Landing Page:} Contains the Hero, Features, Pricing, and Footer components. \\ 
    \texttt{lib/utils.js} & \textbf{Utility:} Exports the \texttt{cn} function (\texttt{clsx} + \texttt{tailwind-merge}). \\ 
    \texttt{tailwind.config.js} & Tailwind CSS configuration file. \\ 
    \texttt{app/globals.css} & Global styles, including Tailwind directives and custom variables. \\ 
    \bottomrule
\end{tabularx}
\end{center}

\end{document}