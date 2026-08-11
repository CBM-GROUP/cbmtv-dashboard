import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@cbmtv.com' },
  })

  if (!existingAdmin) {
    const admin = await prisma.user.create({
      data: {
        email: 'admin@cbmtv.com',
        name: 'Super Admin',
        password: 'password123', // Remember to hash this if you write a custom login API route!
        role: 'admin',
      },
    })
    console.log('✅ Created default admin user:', admin.email)
  } else {
    console.log('ℹ️ Admin user already exists.')
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
